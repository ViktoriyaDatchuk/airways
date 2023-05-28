import { Component, Input, OnInit } from '@angular/core';
import {
  IFareInfoSummary,
  IPassengerFare,
  IPriceData,
  tariffs,
} from '../../booking.model';
import { DataService } from 'src/app/shared/services/data.service';
import {
  SettingsState,
  selectCurrency,
} from 'src/app/redux/selectors/settings.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.scss'],
})
export class FareComponent implements OnInit {
  @Input() public fareInfo!: IFareInfoSummary;
  currencyIcon!: string;

  constructor(
    private store: Store<SettingsState>,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.store.select(selectCurrency).subscribe((data) => {
      this.currencyIcon =
        this.dataService.currencyIcons[
          data as keyof typeof this.dataService.currencyIcons
        ];
    });
  }

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
      curIcon: this.currencyIcon,
    };
  }
}
