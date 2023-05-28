import { Component, DoCheck, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import {
  SettingsState,
  selectCurrency,
  selectDate,
} from 'src/app/redux/selectors/settings.selector';
import { DataService } from 'src/app/shared/services/data.service';
import { IFligthForCart } from '../../models/types.model';
import {
  CartState,
  selectFeature,
} from 'src/app/redux/selectors/cart.selector';
import {
  changeSelected,
  deleteFligth,
} from 'src/app/redux/actions/cart.action';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Location } from '@angular/common';
import {
  UserState,
  selectUserFeature,
} from 'src/app/redux/selectors/user.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
})
export class BookingTableComponent implements OnInit, DoCheck {
  public trips!: IFligthForCart[];

  public isVisible: boolean = false;

  public allComplete: boolean = false;

  public selected: number = 0;

  public sum!: number;

  public currencyIcon!: string;

  public currency!: string;

  public dateFormat!: string;

  public sortedTrips!: IFligthForCart[];

  public page!: string;

  constructor(
    private dataService: DataService,
    private store: Store<SettingsState>,
    private cartStore: Store<CartState>,
    private location: Location,
    private userStore: Store<UserState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.page = this.location.path().slice(1);
    this.store.select(selectCurrency).subscribe((data) => {
      this.currency = data;
      this.currencyIcon =
        this.dataService.currencyIcons[
          data as keyof typeof this.dataService.currencyIcons
        ];
    });
    this.store.select(selectDate).subscribe((data) => {
      this.dateFormat = data;
    });
    if (this.page === 'cart') {
      this.cartStore.select(selectFeature).subscribe((data) => {
        this.trips = data.flight;
      });
    } else {
      this.userStore.select(selectUserFeature).subscribe((data) => {
        this.trips = data.paidFlight;
      });
    }
  }

  ngDoCheck(): void {
    this.sortedTrips = [...this.trips];
    this.selected = this.countSelected();
    this.sum = this.sortedTrips.reduce(
      (sum, trip) => sum + trip.price[this.currency as keyof typeof trip.price],
      0
    );
  }

  setAll(completed: boolean) {
    if (this.allComplete === false) {
      this.allComplete = true;
      this.sortedTrips.forEach((trip) =>
        this.cartStore.dispatch(changeSelected({ selected: true, trip: trip }))
      );
    } else {
      this.allComplete = false;
      this.sortedTrips.forEach((trip) =>
        this.cartStore.dispatch(changeSelected({ selected: false, trip: trip }))
      );
    }
    this.selected = this.countSelected();
  }

  changeValue(trip: IFligthForCart, e: MatCheckboxChange) {
    this.cartStore.dispatch(
      changeSelected({ selected: e.checked, trip: trip })
    );
    setTimeout(() => {
      this.updateAllInputs();
    });
  }

  updateAllInputs() {
    this.allComplete = this.sortedTrips.every((trip) => trip.selected);
  }

  countSelected() {
    let sum = 0;
    this.sortedTrips.forEach((trip) => {
      if (trip.selected === true) {
        sum++;
      }
    });
    return sum;
  }

  toggle(e: Event) {
    (e.currentTarget as HTMLElement)
      ?.getElementsByTagName('app-edit-menu')[0]
      .classList.toggle('unhidden');
  }

  deleteItem(number: string) {
    Array.from(document.getElementsByTagName('app-edit-menu')).forEach(
      (elem) => {
        elem.classList.remove('unhidden');
      }
    );
    this.cartStore.dispatch(deleteFligth({ number: number }));
  }

  getPrice(trip: IFligthForCart): number {
    if (this.currency === 'eur') {
      return Number(trip.price.eur.toFixed(2));
    } else if (this.currency === 'usd') {
      return Number(trip.price.usd.toFixed(2));
    } else if (this.currency === 'rub') {
      return Number(trip.price.rub.toFixed(2));
    } else return Number(trip.price.pln.toFixed(2));
  }

  linkToSummary() {
    if (this.page !== 'cart') {
      this.router.navigate(['/booking/summary']);
    }
  }

  sortData(sort: Sort) {
    const data = [...this.trips];
    if (!sort.active || sort.direction === '') {
      this.sortedTrips = data;
      return;
    }

    this.sortedTrips = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'number':
          return compare(a.flightNumber, b.flightNumber, isAsc);
        case 'flight':
          let first;
          let second;
          if (a.type === 'Round Trip') {
            first = `${a.form.city} - ${a.to.city} - ${a.form.city}`;
          } else {
            first = `${a.form.city} - ${a.to.city}`;
          }
          if (b.type === 'Round Trip') {
            second = `${b.form.city} - ${b.to.city} - ${b.form.city}`;
          } else {
            second = `${b.form.city} - ${b.to.city}`;
          }
          return compare(first, second, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'data':
          let dateFrom;
          let dateTo;
          if (a.type === 'Round Trip') {
            dateFrom = `${a.takeoffDate} - ${a.landingDate}`;
          } else {
            dateFrom = `${a.takeoffDate} - ${a.landingDate}`;
          }
          if (b.type === 'Round Trip') {
            dateTo = `${b.takeoffDate} - ${b.landingDate}`;
          } else {
            dateTo = `${b.takeoffDate} - ${b.landingDate}`;
          }
          return compare(dateFrom, dateTo, isAsc);
        case 'price':
          return compare(
            a.price[this.currency as keyof typeof a.price],
            b.price[this.currency as keyof typeof b.price],
            isAsc
          );
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
