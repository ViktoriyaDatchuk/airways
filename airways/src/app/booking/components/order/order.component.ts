import { Component, Input } from '@angular/core';
import { AGEGROUP, IPassenger, ITicketInfoSummary } from '../../booking.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  @Input() public ticket!: ITicketInfoSummary;
  //   {
  //     name: 'Harry Potter',
  //     hasBaggage: true,
  //     seat: '19E',
  //     type: AGEGROUP.Adult,
  //   },
  //   {
  //     name: 'Severus Potter',
  //     hasBaggage: true,
  //     seat: '19E',
  //     type: AGEGROUP.Adult,
  //   },
  //   {
  //     name: 'Alice Potter',
  //     hasBaggage: false,
  //     seat: '19E',
  //     type: AGEGROUP.Child,
  //   },
  //   {
  //     name: 'Odrey Potter',
  //     hasBaggage: true,
  //     type: AGEGROUP.Infant,
  //   },
  // ];

  getAirportsName() {
    return `${this.ticket.nameFrom} - ${this.ticket.nameTo}`;
  }

  getSeat(passenger: IPassenger) {
    return `Seat ${passenger.seat}`;
  }
}
