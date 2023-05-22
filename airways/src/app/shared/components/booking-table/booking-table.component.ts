import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { IDataTravel, trips } from '../../../cart/tripsmock';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
})
export class BookingTableComponent {
  public isVisible: boolean = false;

  public sortedTrips!: IDataTravel[];

  constructor() {
    this.sortedTrips = trips.slice();
  }

  toggle(e: Event) {
    (e.currentTarget as HTMLElement)
      ?.getElementsByTagName('app-edit-menu')[0]
      .classList.toggle('unhidden');
  }

  sortData(sort: Sort) {
    const data = trips.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTrips = data;
      return;
    }

    this.sortedTrips = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'number':
          return compare(a.number, b.number, isAsc);
        case 'flight':
          let first;
          let second;
          if (a.type === 'Round Trip') {
            first = `${a.from} - ${a.destination} - ${a.from}`;
          } else {
            first = `${a.from} - ${a.destination}`;
          }
          if (b.type === 'Round Trip') {
            second = `${b.from} - ${b.destination} - ${b.from}`;
          } else {
            second = `${b.from} - ${b.destination}`;
          }
          return compare(first, second, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'data':
          let dateFrom;
          let dateTo;
          if (a.type === 'Round Trip') {
            dateFrom = `${a.dateFrom} - ${a.dateTo}&shy;${a.dateFromBack} - ${a.dateToBack}`;
          } else {
            dateFrom = `${a.dateFrom} - ${a.dateTo}`;
          }
          if (b.type === 'Round Trip') {
            dateTo = `${b.dateFrom} - ${b.dateTo}&shy;${b.dateFromBack} - ${b.dateToBack}`;
          } else {
            dateTo = `${b.dateFrom} - ${b.dateTo}`;
          }
          return compare(dateFrom, dateTo, isAsc);
        case 'price':
          return compare(a.price, b.price, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
