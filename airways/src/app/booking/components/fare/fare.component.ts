import { Component } from '@angular/core';
import {
  AGEGROUP,
  IPassengerFare,
  IPriceData,
  tariffs,
} from '../../booking.model';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.scss'],
})
export class FareComponent {
  FullPrice = 257.31;
  cur = 'EUR';

  passengersFare: IPassengerFare[] = [
    {
      type: AGEGROUP.Adult,
      count: 1,
    },
    {
      type: AGEGROUP.Child,
      count: 1,
    },
    {
      type: AGEGROUP.Infant,
      count: 1,
    },
  ];

  getSum() {
    let sum = 0;
    this.passengersFare.forEach((fare) => {
      const curPrice = this.getData(fare).price;
      sum += curPrice;
    });
    return sum;
  }

  getData(passFare: IPassengerFare): IPriceData {
    const tariff = tariffs.find((t) => t.type === passFare.type) || tariffs[0];
    const str = tariff.str;
    const price = this.FullPrice * tariff.coefficient * passFare.count;
    const fare = tariff.fare * price;
    const tax = price - fare;
    return {
      str,
      price,
      tax,
      fare,
      count: passFare.count,
      cur: this.cur,
    };
  }
}
