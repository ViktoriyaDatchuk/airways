import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDataTravel } from 'src/app/redux/models/models';
import {
  selectTicketFrom,
  selectTicketTo,
  selectAdultsCount,
  selectChildsCount,
  selectInfantsCount,
  selectIsReturn,
} from 'src/app/redux/selectors/booking.selectors';
import { IFlightModelWithoutOtherFlights } from 'src/app/shared/models/types.model';
import {
  AGEGROUP,
  IFareInfoSummary,
  IPassenger,
  ITicketInfoSummary,
} from '../../booking.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  showButtons = true;
  // showButtons$!: Observable<boolean>;
  returnTicket$!: Observable<boolean>;
  ticketFrom$!: Observable<IFlightModelWithoutOtherFlights | null>;
  ticketTo$!: Observable<IFlightModelWithoutOtherFlights | null>;
  adults$!: Observable<number>;
  childs$!: Observable<number>;
  infants$!: Observable<number>;
  adults = 0;
  childs = 0;
  infants = 0;
  // currency$!: Observable<string>;
  currency = 'eur';

  fakePassData: IPassenger[] = [
    {
      name: 'Severus Potter',
      hasBaggage: true,
      seat: '19E',
      type: AGEGROUP.Adult,
    },
    {
      name: 'Odrey Potter',
      hasBaggage: false,
      seat: '19E',
      type: AGEGROUP.Child,
    },
    {
      name: 'Ronald Potter',
      hasBaggage: true,
      type: AGEGROUP.Infant,
    },
  ];

  constructor(private state: Store<{ booking: IDataTravel }>) {}

  ngOnInit(): void {
    this.returnTicket$ = this.state.select(selectIsReturn);
    this.ticketFrom$ = this.state.select(selectTicketFrom);
    this.ticketTo$ = this.state.select(selectTicketTo);
    this.adults$ = this.state.select(selectAdultsCount);
    this.childs$ = this.state.select(selectChildsCount);
    this.infants$ = this.state.select(selectInfantsCount);
    // this.currency$ = this.state.select(selectInfantsCount);
    this.subscribe();
  }

  subscribe() {
    this.adults$.subscribe((el) => {
      this.adults = el;
    });
    this.childs$.subscribe((el) => {
      this.childs = el;
    });
    this.infants$.subscribe((el) => {
      this.infants = el;
    });
  }

  getTicketInfo(ticket: IFlightModelWithoutOtherFlights): ITicketInfoSummary {
    const res = {
      flightNumber: ticket.flightNumber,
      nameFrom: ticket.form.name,
      nameTo: ticket.to.name,
      takeoffDate: new Date(ticket.takeoffDate),
      gmtFrom: ticket.form.gmt,
      landingDate: new Date(ticket.landingDate),
      gmtTo: ticket.to.gmt,
      passengers: this.fakePassData,
    };
    return res;
  }

  getFareInfo(
    ticket: IFlightModelWithoutOtherFlights,
    backTicket: IFlightModelWithoutOtherFlights | null
  ): IFareInfoSummary {
    const backPrice = backTicket ? backTicket.price.eur : 0;
    const res = {
      fullPrice: ticket.price.eur + backPrice,
      cur: this.currency.toUpperCase(),
      fares: [
        {
          type: AGEGROUP.Adult,
          count: this.adults,
        },
        {
          type: AGEGROUP.Child,
          count: this.childs,
        },
        {
          type: AGEGROUP.Infant,
          count: this.infants,
        },
      ],
    };
    return res;
  }
}
