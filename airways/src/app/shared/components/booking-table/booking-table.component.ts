import { Component, DoCheck } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { IDataTravel, trips } from '../../../cart/tripsmock';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
})
export class BookingTableComponent implements DoCheck {
  public trips: IDataTravel[] = trips;

  public isVisible: boolean = false;

  public allComplete: boolean = false;

  public selected: number = 0;

  public sum!: number;

  public sortedTrips!: IDataTravel[];

  ngDoCheck(): void {
    this.sortedTrips = this.trips.slice();
    this.sum = this.sortedTrips.reduce((sum, trip) => sum + trip.price, 0);
  }

  setAll(completed: boolean) {
    if (this.allComplete === false) {
      this.allComplete = completed;
      this.sortedTrips.forEach((trip) => (trip.selected = true));
    } else {
      this.allComplete = false;
      this.sortedTrips.forEach((trip) => (trip.selected = false));
    }
    this.selected = this.countSelected();
  }

  updateAllInputs() {
    this.allComplete = this.sortedTrips.every((trip) => trip.selected);
    this.selected = this.countSelected();
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
    this.trips = this.trips.filter((trip) => trip.number !== number);
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
