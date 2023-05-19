import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

interface IDataTravel {
  number: string;
  type: string;
  from: string;
  destination: string;
  dateFrom: string;
  dateTo: string;
  dateFromBack?: string;
  dateToBack?: string;
  adults: number;
  childs: number;
  infants: number;
  price: number;
}

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
})
export class BookingTableComponent {
  public trips: IDataTravel[] = [
    {
      number: 'FR 1925',
      type: 'Round Trip',
      from: 'Dublin',
      destination: 'Warsaw',
      dateFrom: '1 Mar, 2023, 8:40',
      dateTo: '1 Mar, 2023, 12:00',
      dateFromBack: '18 Mar, 2023, 7:40',
      dateToBack: '18 Mar, 2023, 11:00',
      adults: 1,
      childs: 1,
      infants: 1,
      price: 551.38,
    },
    {
      number: 'FR 1936',
      type: 'One way',
      from: 'Gdansk',
      destination: 'Warsaw',
      dateFrom: '28 May, 2023, 15:40',
      dateTo: '28 May, 2023, 16:40',
      adults: 1,
      childs: 0,
      infants: 0,
      price: 20.96,
    },
  ];

  public sortedTrips!: IDataTravel[];

  constructor() {
    this.sortedTrips = this.trips.slice();
  }

  sortData(sort: Sort) {
    const data = this.trips.slice();
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
