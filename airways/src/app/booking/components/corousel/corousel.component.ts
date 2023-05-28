import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import {
  IFlightModel,
  IFlightModelWithoutOtherFlights,
} from 'src/app/shared/models/types.model';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { INoFlightModel, ISliderData } from '../../booking.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IDataTravel } from 'src/app/redux/models/models';
import {
  selectTicketFrom,
  selectTicketTo,
  selectTravelFrom,
  selectTravelTo,
} from 'src/app/redux/selectors/booking.selectors';
import {
  setTicketFrom,
  setTicketTo,
} from 'src/app/redux/actions/booking-main.actions';
import {
  SettingsState,
  selectCurrency,
} from 'src/app/redux/selectors/settings.selector';
import { DataService } from 'src/app/shared/services/data.service';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: [
    './corousel.component.scss',
    '../../../../../node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class CorouselComponent implements OnDestroy, OnChanges, OnInit {
  @Input() from!: boolean;

  carousel$: Observable<ISliderData[]> | undefined;

  ticket$: Observable<IFlightModelWithoutOtherFlights | null> | undefined;

  ticket: IFlightModelWithoutOtherFlights | null = null;

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLDivElement>;

  slider: KeenSliderInstance | null = null;

  currentSlide = 6;

  slideLength = 0;

  currencyIcon!: string;
  currency$!: Observable<string>;
  currency = 'rur';

  constructor(
    private state: Store<{ booking: IDataTravel }>,
    private store: Store<SettingsState>,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.currency$ = this.store.select(selectCurrency);

    this.store.select(selectCurrency).subscribe((data) => {
      this.currencyIcon =
        this.dataService.currencyIcons[
          data as keyof typeof this.dataService.currencyIcons
        ];
    });

    this.subscribe();
  }

  subscribe() {
    this.currency$.subscribe((el) => {
      this.currency = el;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.from) {
      this.carousel$ = this.state.select(selectTravelFrom);
      this.ticket$ = this.state.select(selectTicketFrom);
    } else {
      this.carousel$ = this.state.select(selectTravelTo);
      this.ticket$ = this.state.select(selectTicketTo);
    }

    this.ticket$.subscribe((el) => {
      this.ticket = el;
    });

    this.carousel$?.subscribe((data) => {
      if (data?.length !== 0) {
        setTimeout(() => {
          this.setSlider();
        }, 5);
      }
    });
  }

  setSlider() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 2, spacing: 1 },
          initial: 4,
        },
        '(min-width: 1000px)': {
          slides: { perView: 5, spacing: 1 },
          initial: 3,
        },
      },
      slides: {
        perView: 5,
        spacing: 1,
      },
      initial: 3,
    });
  }

  getDay(date: string) {
    const day = new Date(date);
    return `${day.getDate()} ${day.toLocaleString('en-US', {
      month: 'short',
    })}`;
  }

  getWeek(date: string) {
    const day = new Date(date);
    return day.toLocaleString('en-US', { weekday: 'long' });
  }

  isFlight(product: IFlightModelWithoutOtherFlights | INoFlightModel) {
    if (Object.hasOwn(product, 'price')) {
      return true;
    }
    return false;
  }

  isMainFlight(
    product: IFlightModel | IFlightModelWithoutOtherFlights | INoFlightModel
  ) {
    if (Object.hasOwn(product, 'otherFlights')) {
      return true;
    }
    return false;
  }

  setClass(
    product: IFlightModel | IFlightModelWithoutOtherFlights | INoFlightModel
  ) {
    const isFlight = this.isFlight(product);
    const isMainFlight = this.isMainFlight(product);

    let classString = '';
    isFlight ? (classString += 'active') : (classString += 'disabled');
    isMainFlight
      ? (classString += ' carousel__slide--active')
      : (classString += '');

    return classString;
  }

  getCost(product: IFlightModelWithoutOtherFlights | INoFlightModel) {
    let price = 0;
    if (this.ticket) {
      switch (this.currency) {
        case 'eur':
          price = this.ticket.price.eur;
          break;
        case 'usd':
          price = this.ticket.price.usd;
          break;
        case 'rub':
          price = this.ticket.price.rub;
          break;
        case 'pln':
          price = this.ticket.price.pln;
          break;
      }
    }
    return price;
    // const symbols = ['$', '€', '₽', 'zł'];
    // if (Object.hasOwn(product, 'price')) {
    //   return `${symbols[1]} ${
    //     (product as IFlightModelWithoutOtherFlights).price.eur
    //   }`;
    // }
    // return '';
  }

  chooseSlide(ev: MouseEvent) {
    const target = ev.target as HTMLDivElement | HTMLParagraphElement;
    const currentTarget = ev.currentTarget;
    if (currentTarget === target) return;
    if (target instanceof HTMLDivElement) {
      if (target.classList.contains('disabled')) return;
      const slidesArr = this.sliderRef.nativeElement.childNodes;
      slidesArr.forEach((slide) => {
        if (slide instanceof HTMLDivElement) {
          slide.classList.remove('carousel__slide--active');
        }
      });
      target.classList.add('carousel__slide--active');
      const id = this._getId(target.classList.value);
      this.carousel$?.subscribe((el) => {
        const newTicketSliderData = el[id];
        if (!newTicketSliderData) return;
        const newTicket = newTicketSliderData[1];
        if (Object.hasOwn(newTicket, 'price')) {
          const ticket = newTicket as IFlightModelWithoutOtherFlights;
          if (this.from) {
            this.state.dispatch(setTicketFrom({ ticketFrom: ticket }));
          } else {
            this.state.dispatch(setTicketTo({ ticketTo: ticket }));
          }
        }
      });
    }
  }

  _getId(className: string): number {
    const idStart = className.indexOf('idx-');
    const id = Number(
      className.slice(idStart).split(' ')[0].replace('idx-', '')
    );
    return id;
  }

  getSeatsClass() {
    const totalSeats = this.ticket?.seats.total;
    const avaibleSeats = this.ticket?.seats.avaible;

    if (!avaibleSeats || !totalSeats) return;
    const TENSEATSNUMBER = 10;
    const halfSeats = totalSeats / 2;
    if (avaibleSeats > halfSeats) {
      return 'carousel__slide-bottom--green';
    }
    if (avaibleSeats < halfSeats && avaibleSeats > TENSEATSNUMBER) {
      return 'carousel__slide-bottom--yellow';
    } else {
      return 'carousel__slide-bottom--red';
    }
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
