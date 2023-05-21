import { Component, OnInit } from '@angular/core';
import { IFlightModelWithoutOtherFlights, IOtherFlights, SearchFlightModel } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/services/airways.service';
import { ISliderData } from '../../booking.model';
import { Store } from '@ngrx/store';
import { IDataTravel } from 'src/app/redux/models/models';
import { setDataTravelFrom, setDataTravelTo, setIsLoadingFlight, setTicketFrom, setTicketTo } from 'src/app/redux/actions/booking-main.actions';


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

  constructor(
    private airportService: AirportsService,
    private state: Store<{ booking: IDataTravel }>,
  ) {}

  ngOnInit() {
    this.getFlightData();
  }

  getFlightData() {
    this.state.dispatch(setIsLoadingFlight(true))
    this.airportService.searchFlight(this.fakeData).subscribe((flight) => {
      const products = flight;
      const flightFrom = this.getArrayOfFlight(products[0].otherFlights, products[0])
      const flightTo = this.getArrayOfFlight(products[1].otherFlights, products[1])
      this.state.dispatch(setDataTravelFrom({from: flightFrom}))
      this.state.dispatch(setDataTravelTo({to: flightTo}))
      this.state.dispatch(setTicketFrom({ticketFrom: products[0]}))
      this.state.dispatch(setTicketTo({ticketTo: products[1]}))
      this.state.dispatch(setIsLoadingFlight(false))
    });
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
