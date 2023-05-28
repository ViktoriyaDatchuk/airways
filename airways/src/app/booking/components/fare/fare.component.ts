import { Component, Input } from '@angular/core';
import {
  AGEGROUP,
  IFareInfoSummary,
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
  @Input() public fareInfo!: IFareInfoSummary;

  getSum(passengersFare: IPassengerFare[], fullPrice: number, cur: string) {
    let sum = 0;
    passengersFare.forEach((fare) => {
      const curPrice = this.getData(fare, fullPrice, cur).price;
      sum += curPrice;
    });
    return sum;
  }

  getData(
    passFare: IPassengerFare,
    fullPrice: number,
    cur: string
  ): IPriceData {
    const tariff = tariffs.find((t) => t.type === passFare.type) || tariffs[0];
    const str = tariff.str;
    const price = fullPrice * tariff.coefficient * passFare.count;
    const fare = tariff.fare * price;
    const tax = price - fare;
    return {
      str,
      price,
      tax,
      fare,
      count: passFare.count,
      cur: cur,
    };
  }
}
