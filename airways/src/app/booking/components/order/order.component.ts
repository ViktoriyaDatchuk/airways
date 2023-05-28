import { Component } from '@angular/core';
import { AGEGROUP, IPassenger } from '../../booking.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  persons: IPassenger[] = [
    {
      name: 'Harry Potter',
      hasBaggage: true,
      seat: '19E',
      type: AGEGROUP.Adult,
    },
    {
      name: 'Lily Potter',
      hasBaggage: false,
      seat: '19E',
      type: AGEGROUP.Child,
    },
    {
      name: 'James Potter',
      hasBaggage: true,
      type: AGEGROUP.Infant,
    },
  ];

  getSeat(passenger: IPassenger) {
    return `Seat ${passenger.seat}`;
  }
}
