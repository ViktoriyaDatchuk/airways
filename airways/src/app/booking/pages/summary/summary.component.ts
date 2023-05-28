import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDataTravel, IPersonsData } from 'src/app/redux/models/models';
import {
  selectTicketFrom,
  selectTicketTo,
  selectAdultsCount,
  selectChildsCount,
  selectInfantsCount,
  selectIsReturn,
  selectPersonsData,
} from 'src/app/redux/selectors/booking.selectors';

import { IFlightModelWithoutOtherFlights } from 'src/app/shared/models/types.model';
import {
  AGEGROUP,
  IFareInfoSummary,
  IPassenger,
  ITicketInfoSummary,
} from '../../booking.model';
import {
  SettingsState,
  selectCurrency,
} from 'src/app/redux/selectors/settings.selector';

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
  passInfo$!: Observable<IPersonsData[]>;
  passInfo: IPersonsData[] = [];
  adults = 0;
  childs = 0;
  infants = 0;
  currency$!: Observable<string>;
  currency = 'rur';

  constructor(
    private state: Store<{ booking: IDataTravel }>,
    private store: Store<SettingsState>
  ) {}

  ngOnInit(): void {
    this.returnTicket$ = this.state.select(selectIsReturn);
    this.ticketFrom$ = this.state.select(selectTicketFrom);
    this.ticketTo$ = this.state.select(selectTicketTo);
    this.adults$ = this.state.select(selectAdultsCount);
    this.childs$ = this.state.select(selectChildsCount);
    this.infants$ = this.state.select(selectInfantsCount);
    this.passInfo$ = this.state.select(selectPersonsData);
    this.currency$ = this.store.select(selectCurrency);
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
    this.passInfo$.subscribe((el) => {
      this.passInfo = el;
    });
    this.currency$.subscribe((el) => {
      this.currency = el;
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
      // passengers: this.fakePassData,
      passengers: this.getPassengers(),
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

  getPassengers() {
    const res = [];
    const ABC = 'ABCDEF';
    let num = Math.ceil(Math.random() * 15);
    let num2 = Math.floor(Math.random() * 6);

    for (let i = 0; i < this.passInfo.length; i++) {
      const element = this.passInfo[i];
      const obj: IPassenger = {
        name: `${element.name} ${element.lastName}`,
        baggage: element.countWeight ? parseInt(element.countWeight) : 0,
        isInfant: element.infant,
      };
      if (!element.infant) {
        obj.seat = `${5 + num}${ABC.charAt(num2)}`;
      }

      res.push(obj);

      num2++;
      if (num2 === 6) {
        num++;
        num2 = 0;
      }
    }
    return res;
  }
}
