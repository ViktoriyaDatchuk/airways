import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataTravel } from 'src/app/redux/models/models';
import { Store } from '@ngrx/store';
import {
  selectFeature,
  selectFlightIsLoading,
  selectIsReturn,
  selectTicketFrom,
} from 'src/app/redux/selectors/booking.selectors';
import {
  IFligthForCart,
  IFlightModelWithoutOtherFlights,
  PriceModel,
} from 'src/app/shared/models/types.model';
import { FROMTOSTRINGS } from '../../booking.model';
import { Router } from '@angular/router';
import { CartState } from 'src/app/redux/selectors/cart.selector';
import { addFlight } from 'src/app/redux/actions/cart.action';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements AfterContentInit, OnInit {
  returnTicket = true;

  returnTicket$!: Observable<boolean>;

  isLoadingFlight$: Observable<boolean>;

  isLoading = false;

  hasFromCarusel = true;

  hasToCarusel = false;

  ticket$!: Observable<IFlightModelWithoutOtherFlights | null>;

  ticket: IFlightModelWithoutOtherFlights | null = null;

  fligth!: IDataTravel;

  fligthForCart: IFligthForCart = {
    selected: false,
    adults: 0,
    childs: 0,
    infants: 0,
    type: '',
    flightNumber: '',
    form: {
      key: '',
      name: '',
      city: '',
      gmt: '',
      country: '',
    },
    landingDate: '',
    price: { eur: 0, usd: 0, rub: 0, pln: 0 },
    seats: { total: 0, avaible: 0 },
    takeoffDate: '',
    timeMins: 0,
    to: { key: '', name: '', city: '', gmt: '', country: '' },
  };

  fligthForCart2: IFligthForCart = {
    selected: false,
    adults: 0,
    childs: 0,
    infants: 0,
    type: '',
    flightNumber: '',
    form: {
      key: '',
      name: '',
      city: '',
      gmt: '',
      country: '',
    },
    landingDate: '',
    price: { eur: 0, usd: 0, rub: 0, pln: 0 },
    seats: { total: 0, avaible: 0 },
    takeoffDate: '',
    timeMins: 0,
    to: { key: '', name: '', city: '', gmt: '', country: '' },
  };

  constructor(
    private store: Store<{ booking: IDataTravel }>,
    private router: Router,
    private cartStore: Store<CartState>
  ) {
    this.isLoadingFlight$ = this.store.select(selectFlightIsLoading);
    this.isLoadingFlight$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  ngOnInit(): void {
    this.ticket$ = this.store.select(selectTicketFrom);
    this.ticket$.subscribe((el) => {
      this.ticket = el;
    });
    this.returnTicket$ = this.store.select(selectIsReturn);
    this.returnTicket$.subscribe((el) => {
      this.returnTicket = el;
      console.log(this.returnTicket, '1');
    });

    console.log(this.returnTicket, '2');

    this.store.select(selectFeature).subscribe((data) => {
      this.fligth = data;
    });
  }

  selectedTicket(fromOrTo: any) {
    if (typeof fromOrTo === 'string') {
      if (fromOrTo === FROMTOSTRINGS.from) {
        this.hasFromCarusel = false;
      } else {
        this.hasToCarusel = false;
      }
    }
  }

  buttonBackHandlerClick() {
    this.router.navigate(['']);
  }

  buttonContinueHandlerClick() {
    this.router.navigate(['/passangers']);
    this.addFligthToStore();
    this.addFligthToStore2();
  }

  addFligthToStore() {
    this.fligthForCart.flightNumber = this.fligth.ticketFrom
      ?.flightNumber as string;
    this.fligthForCart.form.city = this.fligth.from;
    this.fligthForCart.landingDate = this.fligth.ticketFrom
      ?.landingDate as string;
    this.fligthForCart.price = this.fligth.ticketFrom?.price as PriceModel;
    this.fligthForCart.seats.avaible = 111;
    this.fligthForCart.seats.total = 874;
    this.fligthForCart.takeoffDate = this.fligth.ticketFrom
      ?.takeoffDate as string;
    this.fligthForCart.timeMins = 586;
    this.fligthForCart.to.city = this.fligth.destination;
    if (this.returnTicket) {
      this.fligthForCart.type = 'Round Trip';
      this.fligthForCart.takeoffDateBack = this.fligth.ticketTo?.takeoffDate;
      this.fligthForCart.landingDateBack = this.fligth.ticketTo?.landingDate;
    } else {
      this.fligthForCart.type = 'One way';
    }
    this.fligthForCart.adults = this.fligth.adults;
    this.fligthForCart.childs = this.fligth.childs;
    this.fligthForCart.infants = this.fligth.infants;
    this.cartStore.dispatch(addFlight({ fligth: this.fligthForCart }));
  }

  addFligthToStore2() {
    this.fligthForCart2.selected = false;
    this.fligthForCart2.flightNumber = 'FR 1936';
    this.fligthForCart2.form.city = this.fligth.from;
    this.fligthForCart2.landingDate = this.fligth.dateTo;
    this.fligthForCart2.price.eur = 551.38;
    this.fligthForCart2.price.usd = 600;
    this.fligthForCart2.price.rub = 58967;
    this.fligthForCart2.price.pln = 2134;
    this.fligthForCart2.seats.avaible = 111;
    this.fligthForCart2.seats.total = 874;
    this.fligthForCart2.takeoffDate = this.fligth.dateFrom;
    this.fligthForCart2.timeMins = 586;
    this.fligthForCart2.to.city = this.fligth.destination;
    if (this.returnTicket) {
      this.fligthForCart2.type = 'Round Trip';
    } else {
      this.fligthForCart2.type = 'One way';
    }
    this.fligthForCart2.adults = this.fligth.adults;
    this.fligthForCart2.childs = this.fligth.childs;
    this.fligthForCart2.infants = this.fligth.infants;
    this.cartStore.dispatch(addFlight({ fligth: this.fligthForCart2 }));
  }

  isDisabledButton() {
    if (this.returnTicket) {
      if (!this.hasFromCarusel && !this.hasToCarusel) {
        return false;
      } else {
        return true;
      }
    } else {
      if (!this.hasFromCarusel) {
        return false;
      }
      return true;
    }
  }

  ngAfterContentInit(): void {
    if (this.returnTicket) {
      this.hasToCarusel = true;
    }
  }

  getDirectionHeader(from: boolean) {
    const fromCity = this.ticket?.form.city;
    const toCity = this.ticket?.to.city;
    if (from) return `${fromCity} to ${toCity}`;
    else return `${toCity} to ${fromCity}`;
  }
}
