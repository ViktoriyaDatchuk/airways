import { Component, Input } from '@angular/core';
import { AGEGROUP, IPassenger, ITicketInfoSummary } from '../../booking.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  @Input() public ticket!: ITicketInfoSummary;

  getAirportsName() {
    return `${this.ticket.nameFrom} - ${this.ticket.nameTo}`;
  }

  getSeat(passenger: IPassenger) {
    return `Seat ${passenger.seat}`;
  }
}
