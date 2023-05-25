import { Injectable } from '@angular/core';

export interface ICurrencyIcons {
  eur: string;
  usa: string;
  rub: string;
  pln: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public currencyIcons: ICurrencyIcons = {
    eur: '€',
    usa: '$',
    rub: '₽',
    pln: 'zł',
  };

  getCurrencyIcons() {
    return this.currencyIcons;
  }
}
