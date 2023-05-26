import { Location } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { trips } from 'src/app/cart/tripsmock';
import {
  setCurrencyFormat,
  setDateFormat,
} from 'src/app/redux/actions/settings.actoins';
import { SettingsState } from 'src/app/redux/selectors/settings.selector';

interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements DoCheck {
  public page!: string;

  public datesFormat: Select[] = [
    { value: 'MM/DD/YYYY', viewValue: 'MM/DD/YYYY' },
    { value: 'DD/MM/YYYY', viewValue: 'DD/MM/YYYY' },
    { value: 'YYYY/DD/MM', viewValue: 'YYYY/DD/MM' },
    { value: 'YYYY/MM/DD', viewValue: 'YYYY/MM/DD' },
  ];

  public currency: Select[] = [
    { value: 'eur', viewValue: 'EUR' },
    { value: 'usa', viewValue: 'USA' },
    { value: 'rub', viewValue: 'RUB' },
    { value: 'pln', viewValue: 'PLN' },
  ];

  public backgroundColor: string = 'rgba(116, 118, 122, 0.2)';

  public bookingFilter: string =
    'invert(75%) sepia(1%) saturate(4760%) hue-rotate(211deg) brightness(106%) contrast(96%)';

  public cartFilter: string =
    'invert(86%) sepia(38%) saturate(4871%) hue-rotate(209deg) brightness(97%) contrast(89%)';

  public hidden: boolean = true;

  public badgeCounter!: number;

  public isAuth: boolean = false;

  public userName: string = 'Viktoryia';

  constructor(
    private location: Location,
    private store: Store<SettingsState>
  ) {}

  ngDoCheck(): void {
    this.page = this.location.path().slice(1);
    this.badgeCounter = trips.length;
    // if (this.badgeCounter !== 0) {
    //   this.hidden = false;
    // } else {
    //   this.hidden = true;
    // }
  }

  addDateToStore(e: string) {
    this.store.dispatch(setDateFormat({ date: e }));
  }

  addCurrencyToStore(e: string) {
    this.store.dispatch(setCurrencyFormat({ currency: e }));
  }
}
