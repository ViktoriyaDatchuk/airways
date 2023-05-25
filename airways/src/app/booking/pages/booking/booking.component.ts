import { Component, OnInit } from '@angular/core';
import { IFlightModelWithoutOtherFlights, IOtherFlights, SearchFlightModel } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/services/airways.service';
import { ISliderData } from '../../booking.model';
import { Store } from '@ngrx/store';
import { IDataTravel } from 'src/app/redux/models/models';
import { setDataTravelFrom, setDataTravelTo, setIsLoadingFlight, setTicketFrom, setTicketTo } from 'src/app/redux/actions/booking-main.actions';
import { Observable } from 'rxjs';
import { selectDateFrom, selectDateTo, selectFlightIsLoading, selectFrom, selectIsReturn, selectTo } from 'src/app/redux/selectors/booking.selectors';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  fakeData: SearchFlightModel =  {
    fromKey: "AMS",
    toKey: "MAD",
    forwardDate: "2023-09-21T00:00:00.000Z",
    backDate: "2023-10-11T00:00:00.000Z"
  }
  // fakeData: SearchFlightModel =  {
  //   fromKey: "AMS",
  //   toKey: "MAD",
  //   forwardDate: "2023-09-21T00:00:00.000Z",
  //   backDate: "2023-10-11T00:00:00.000Z"
  // }

  fromKey$!: Observable<string>
  toKey$!: Observable<string>
  forwardDate$!: Observable<string>
  backDate$!: Observable<string>
  returnTicket$!: Observable<boolean>

  fromKey = ''
  toKey = ''
  forwardDate = ''
  backDate = ''
  returnTicket = true

  ticketIsLoading$!: Observable<boolean>

  ticketIsLoading = false

  constructor(
    private airportService: AirportsService,
    private state: Store<{ booking: IDataTravel }>,
  ) {}

  ngOnInit() {
    
    this.ticketIsLoading$ = this.state.select(selectFlightIsLoading)
    this.ticketIsLoading$.subscribe((el) => {
      this.ticketIsLoading = el
    })

    this.fromKey$ = this.state.select(selectFrom)
    this.toKey$ = this.state.select(selectTo)
    this.forwardDate$ = this.state.select(selectDateFrom)
    this.backDate$ = this.state.select(selectDateTo)
    this.returnTicket$ = this.state.select(selectIsReturn)

    this.subscribe()    
    
    this.getFlightData();
  }

  subscribe() {
    this.fromKey$.subscribe((el) => {
      this.fromKey =  el
    })
    this.toKey$.subscribe((el) => {
      this.toKey =  el
    })
    this.forwardDate$.subscribe((el) => {
      this.forwardDate =  el
    })
    this.backDate$.subscribe((el) => {
      this.backDate =  el
    })
    this.returnTicket$.subscribe((el) => {
      this.returnTicket =  el
    })
  }

  generateFlightRequest(): SearchFlightModel {
    const response = {
      forwardDate: this.forwardDate,
      fromKey: this.fromKey,
      toKey: this.toKey,
      backDate: this.returnTicket ? this.backDate : ''
    }
    console.log(response)
    return  response
  }

  getFlightData() {
    this.state.dispatch(setIsLoadingFlight(true))
    
    this.airportService.searchFlight(this.generateFlightRequest()).subscribe((flight) => {
      const products = flight;
      const flightFrom = this.getArrayOfFlight(products[0].otherFlights, products[0])
      if (this.returnTicket) {
        const flightTo = this.getArrayOfFlight(products[1].otherFlights, products[1])
        this.state.dispatch(setDataTravelTo({to: flightTo}))
      }
      this.state.dispatch(setDataTravelFrom({from: flightFrom}))
      this.state.dispatch(setTicketFrom({ticketFrom: products[0]}))
      this.state.dispatch(setTicketTo({ticketTo: products[1]}))
      this.state.dispatch(setIsLoadingFlight(false))
    });
    this.subscribe()
  }

  getArrayOfFlight(overFlightArr: IOtherFlights, ticket: IFlightModelWithoutOtherFlights): ISliderData[] {
    const numberTicket = ['-5', '-4', '-3', '-2', '-1', '1', '2', '3', '4', '5']
    const arrayOfFlight: ISliderData[] = []  
    const zeroFlight = ['0', ticket] as ISliderData

    const keys = Object.keys(overFlightArr)
    const entries = <ISliderData[]>Object.entries(overFlightArr)
    arrayOfFlight.push(...entries)
    
    for (let index = 0; index < numberTicket.length; index += 1) {
      const element = numberTicket[index] as keyof IOtherFlights;

      if (!keys.includes(element)) {
        arrayOfFlight.push([element, { takeoffDate: this.createDate(element, ticket.takeoffDate) }])
      }
    }
    arrayOfFlight.push(zeroFlight)

    return arrayOfFlight.sort((a,b) => Number(a[0]) - Number(b[0]))
  }


  createDate(day: string, takeoffDate: string) {
    const date = new Date(takeoffDate);
    date.setDate(date.getDate() + Number(day))

    return date.toISOString()
  }
}
