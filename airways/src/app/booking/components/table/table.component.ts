import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDataTravel } from 'src/app/redux/models/models';
import {
  selectTicketFrom,
  selectTicketTo,
} from 'src/app/redux/selectors/booking.selectors';
import { IFlightModelWithoutOtherFlights } from 'src/app/shared/models/types.model';
import { FROMTOSTRINGS } from '../../booking.model';
import { DataService } from 'src/app/shared/services/data.service';
import {
  SettingsState,
  selectCurrency,
} from 'src/app/redux/selectors/settings.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() from!: boolean;

  @Output() onSelectTicket = new EventEmitter<FROMTOSTRINGS>();

  ticket$: Observable<IFlightModelWithoutOtherFlights | null>;

  ticket: IFlightModelWithoutOtherFlights | null = null;

  currencyIcon!: string;
  currency$!: Observable<string>;
  currency = 'rur';

  constructor(
    private state: Store<{ booking: IDataTravel }>,
    private store: Store<SettingsState>,
    private dataService: DataService
  ) {
    this.ticket$ = this.state.select(selectTicketTo);
  }

  ngOnInit(): void {
    if (this.from) {
      this.ticket$ = this.state.select(selectTicketFrom);
    } else {
      this.ticket$ = this.state.select(selectTicketTo);
    }

    this.ticket$.subscribe((ticket) => {
      this.ticket = ticket;
    });

    this.currency$ = this.store.select(selectCurrency);

    this.store.select(selectCurrency).subscribe((data) => {
      this.currencyIcon =
        this.dataService.currencyIcons[
          data as keyof typeof this.dataService.currencyIcons
        ];
    });

    this.subscribe();
  }

  subscribe() {
    this.currency$.subscribe((el) => {
      this.currency = el;
    });
  }

  getDate(from: boolean) {
    const dateData = this._getDate(from);
    const date = new Date(dateData);
    return `${date.toLocaleString('en-US', {
      weekday: 'short',
    })}, ${date.getDate()} ${date.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
    })}`;
  }

  getTime(from: boolean) {
    const dateData = this._getDate(from);
    const date = new Date(dateData);
    return `${date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })}`;
  }

  getUTC(from: boolean) {
    if (!this.ticket) return '';
    let utcData: string;
    if (from) {
      utcData = this.ticket.form.gmt;
    } else {
      utcData = this.ticket.to.gmt;
    }
    return `${utcData.slice(0, 2)}`;
  }

  getFlightHours() {
    if (!this.ticket?.timeMins) return '';
    const timestamp = this.ticket?.timeMins;
    const hours = Math.floor(timestamp / 60);
    const minutes = Math.floor(timestamp) - hours * 60;
    return `${hours}h ${minutes}m`;
  }

  getSeatsClass() {
    const totalSeats = this.ticket?.seats.total;
    const avaibleSeats = this.ticket?.seats.avaible;

    if (!avaibleSeats || !totalSeats) return;
    const TENSEATSNUMBER = 10;
    const halfSeats = totalSeats / 2;
    if (avaibleSeats > halfSeats) {
      return 'table__price-seats table__price-seats--green';
    }
    if (avaibleSeats < halfSeats && avaibleSeats > TENSEATSNUMBER) {
      return 'table__price-seats table__price-seats--yellow';
    } else {
      return 'table__price-seats table__price-seats--red';
    }
  }

  buttonHandlerClick() {
    if (this.from) {
      this.onSelectTicket.emit(FROMTOSTRINGS.from);
    } else {
      this.onSelectTicket.emit(FROMTOSTRINGS.to);
    }
  }

  _getDate(from: boolean): string {
    if (!this.ticket) return '';
    let dateData: string;
    if (from) {
      dateData = this.ticket.takeoffDate;
    } else {
      dateData = this.ticket.landingDate;
    }
    return dateData;
  }

  getPrice(): number {
    let price = 0;
    if (this.ticket) {
      switch (this.currency) {
        case 'eur':
          price = this.ticket.price.eur;
          break;
        case 'usd':
          price = this.ticket.price.usd;
          break;
        case 'rub':
          price = this.ticket.price.rub;
          break;
        case 'pln':
          price = this.ticket.price.pln;
          break;
      }
    }
    return price;
  }
}
