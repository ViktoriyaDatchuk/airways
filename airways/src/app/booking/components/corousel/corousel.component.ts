import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import { AirportModel, IFlightModel, IFlightModelWithoutOtherFlights } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/services/airways.service';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { SwiperComponent } from "swiper/angular";
import { INoFlightModel, ISliderData } from '../../booking.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IDataTravel } from 'src/app/redux/models/models';
import { selectFlightIsLoading, selectTicketFrom, selectTicketTo, selectTravelFrom, selectTravelTo } from 'src/app/redux/selectors/booking.selectors';
import { setTicketFrom, setTicketTo } from 'src/app/redux/actions/booking-main.actions';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss', '../../../../../node_modules/keen-slider/keen-slider.min.css'],
})
export class CorouselComponent implements OnDestroy, AfterViewInit {

  @Input() from!: boolean

  carousel$: Observable<ISliderData[]>

  ticket$: Observable<IFlightModelWithoutOtherFlights | null>

  ticket: IFlightModelWithoutOtherFlights | null = null

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLDivElement>

  slider: KeenSliderInstance | null = null;

  currentSlide = 6;

  slideLength = 0;

  constructor(private airportService: AirportsService, private state: Store<{booking: IDataTravel}>) {
    if (this.from) {
      this.carousel$ = this.state.select(selectTravelTo)
      this.ticket$ = this.state.select(selectTicketTo)
    } else {
      this.carousel$ = this.state.select(selectTravelFrom)
      this.ticket$ = this.state.select(selectTicketFrom)
    }

    this.ticket$.subscribe((el) => {
      this.ticket = el
    })
    this.carousel$.subscribe((data) => {
      if (data?.length !== 0) {
        setTimeout(() => {
          this.setSlider();
        }, 5)
      }
    })
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.setSlider();
    // }, 500)
  }

  setSlider() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 1 },
          initial: 4,
        },
        "(min-width: 1000px)": {
          slides: { perView: 5, spacing: 1 },
          initial: 3
        },
      },
      slides: {
        perView: 5,
        spacing: 1,
      },
      initial: 3,
    })
  }

  getDay(date: string) {
    const day = new Date(date)
    return `${day.getDate()} ${day.toLocaleString('en-US', { month: 'short' })}`
  }

  getWeek(date: string) {
    const day = new Date(date)
    return day.toLocaleString('en-US', { weekday: 'long'})
  }
  
  
  isFlight(product: IFlightModelWithoutOtherFlights | INoFlightModel) {
    if (Object.hasOwn(product, 'price')) {
      return true
    } 
    return false
  }

  isMainFlight(product: IFlightModel | IFlightModelWithoutOtherFlights | INoFlightModel) {
    if (Object.hasOwn(product, 'otherFlights')) {
      return true
    } 
    return false
  }

  setClass(product: IFlightModel | IFlightModelWithoutOtherFlights | INoFlightModel) {
    const isFlight = this.isFlight(product)
    const isMainFlight = this.isMainFlight(product)

    let classString = ''
    isFlight ? classString += 'active' : classString += 'disabled'
    isMainFlight ? classString += ' carousel__slide--active' : classString += ''

    return classString
  }

  getCost(product: IFlightModelWithoutOtherFlights | INoFlightModel) {
    const symbols = ['$', '€', '₽', 'zł']
    if (Object.hasOwn(product, 'price')) {
      return `${symbols[1]} ${(product as IFlightModelWithoutOtherFlights).price.eur}`
    }
    return ''
  }

  chooseSlide(ev: MouseEvent) {
    const target = ev.target as HTMLDivElement | HTMLParagraphElement 
    const currentTarget = ev.currentTarget
    if (currentTarget === target) return
    if (target instanceof HTMLDivElement) {
      if (target.classList.contains('disabled')) return
      const slidesArr = this.sliderRef.nativeElement.childNodes
      slidesArr.forEach((slide) => {
        if (slide instanceof HTMLDivElement) {
          slide.classList.remove('carousel__slide--active')
        }
      })
      target.classList.add('carousel__slide--active')
      const id = this._getId(target.classList.value)
      this.carousel$.subscribe((el) => {
        const newTicketSliderData = el[id]
        if (!newTicketSliderData) return
        const newTicket = newTicketSliderData[1]
        if (Object.hasOwn(newTicket, 'price')) {
          const ticket = newTicket as IFlightModelWithoutOtherFlights
          if (this.from) {
            this.state.dispatch(setTicketFrom({ticketFrom: ticket}))
            } else {
            this.state.dispatch(setTicketTo({ticketTo: ticket}))
           }
        }  
      })
    }
  }


  _getId(className: string): number {
    const idStart = className.indexOf('idx-')
    const id = Number(className.slice(idStart).split(' ')[0].replace('idx-', ''))
    return id
  }

  getSeatsClass() {
    const totalSeats = this.ticket?.seats.total
    const avaibleSeats = this.ticket?.seats.avaible

    if (!avaibleSeats || !totalSeats) return

    const percentAvaible = Number((((totalSeats - avaibleSeats) / totalSeats) * 100).toFixed())
    const PERCENT50NUMBER = 50
    const TENSEATSNUMBER = 10
    if (percentAvaible > PERCENT50NUMBER) {
      return 'carousel__slide-bottom--green'
    }
    if (percentAvaible < PERCENT50NUMBER && percentAvaible > TENSEATSNUMBER) {
      return 'carousel__slide-bottom--yellow'
    } else {
      return 'carousel__slide-bottom--red'
    }

  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }



}
