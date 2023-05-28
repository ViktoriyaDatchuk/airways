import { Injectable } from '@angular/core';

export interface ICurrencyIcons {
  eur: string;
  usd: string;
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
    usd: '$',
    rub: '₽',
    pln: 'zł',
  };

  getCurrencyIcons() {
    return this.currencyIcons;
  }
}
