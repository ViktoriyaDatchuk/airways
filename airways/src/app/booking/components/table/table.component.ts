import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDataTravel } from 'src/app/redux/models/models';
import { selectTicketFrom, selectTicketTo } from 'src/app/redux/selectors/booking.selectors';
import { IFlightModel, IFlightModelWithoutOtherFlights } from 'src/app/shared/models/types.model';
import { FROMTOSTRINGS } from '../../booking.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() from!: boolean;

  @Output() onSelectTicket = new EventEmitter<FROMTOSTRINGS>();

  ticket$: Observable<IFlightModelWithoutOtherFlights | null>;

  ticket: IFlightModelWithoutOtherFlights | null = null;

  constructor(private state: Store<{booking: IDataTravel}>) {
    if (this.from) {
      this.ticket$ = this.state.select(selectTicketTo)
    } else {
      this.ticket$ = this.state.select(selectTicketFrom)
    }
    this.ticket$.subscribe((ticket) => { 
      this.ticket = ticket;
    })
  }

  getDate(from: boolean) {
    const dateData = this._getDate(from)
    const date = new Date(dateData)
    return `${date.toLocaleString('en-US', { weekday: 'short'})}, ${date.getDate()} ${date.toLocaleString('en-US', { month: 'short', year: 'numeric' })}`
  }

  getTime(from: boolean) {
    const dateData = this._getDate(from)
    const date = new Date(dateData)
    return `${date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false})}`
  }

  getUTC(from: boolean) {
    if (!this.ticket) return ''
    let utcData: string; 
    if (from) {
      utcData = this.ticket.form.gmt
    } else {
      utcData = this.ticket.to.gmt
    }
    return `${utcData.slice(0, 2)}`
  }

  getFlightHours() {
    if (!this.ticket?.timeMins) return ''
    const timestamp = this.ticket?.timeMins
    const hours = Math.floor(timestamp / 60);
    const minutes = Math.floor(timestamp) - (hours * 60);
    return `${hours}h ${minutes}m`
  }

  getSeatsClass() {
    const avaibleSeats = this.ticket?.seats.avaible
    const totalSeats = this.ticket?.seats.total
    if (!avaibleSeats || !totalSeats) return

    const percentAvaible = Number((((totalSeats - avaibleSeats) / totalSeats) * 100).toFixed())
    const PERCENT50NUMBER = 50
    const TENSEATSNUMBER = 10
    if (percentAvaible > PERCENT50NUMBER) {
      return 'table__price-seats table__price-seats--green'
    }
    if (percentAvaible < PERCENT50NUMBER && percentAvaible > TENSEATSNUMBER) {
      return 'table__price-seats table__price-seats--yellow'
    } else {
      return 'table__price-seats table__price-seats--red'
    }
  }

  buttonHandlerClick() {
    if (this.from) {
      this.onSelectTicket.emit(FROMTOSTRINGS.from)
    } else {
      this.onSelectTicket.emit(FROMTOSTRINGS.to)
    }
  }

  _getDate(from: boolean): string {
    if (!this.ticket) return ''
    let dateData: string;
    if (from) {
      dateData = this.ticket.takeoffDate
    } else {
      dateData = this.ticket.landingDate
    }
    return dateData
  }
}
