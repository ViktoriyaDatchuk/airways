import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataTravel } from 'src/app/redux/models/models';
import { Store } from '@ngrx/store';
import { selectFlightIsLoading, selectIsReturn, selectTicketFrom } from 'src/app/redux/selectors/booking.selectors';
import { IFlightModelWithoutOtherFlights } from 'src/app/shared/models/types.model';
import { FROMTOSTRINGS } from '../../booking.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements AfterContentInit, OnInit {
  
  returnTicket = true;

  returnTicket$!: Observable<boolean>

  isLoadingFlight$: Observable<boolean>

  isLoading = false;

  hasFromCarusel = true;

  hasToCarusel = false;

  ticket$!: Observable<IFlightModelWithoutOtherFlights | null>

  ticket: IFlightModelWithoutOtherFlights | null = null

  constructor(private store: Store<{ booking: IDataTravel }>, private router: Router) {
    
    this.isLoadingFlight$ = this.store.select(selectFlightIsLoading)
    this.isLoadingFlight$.subscribe((loading) => {
      this.isLoading = loading
    })
  }

  ngOnInit(): void {
    this.ticket$ = this.store.select(selectTicketFrom)
    this.ticket$.subscribe((el) => {
      this.ticket = el
    })
    this.returnTicket$ = this.store.select(selectIsReturn)
    this.returnTicket$.subscribe((el) => {
      this.returnTicket = el
      console.log(this.returnTicket, '1')
    })

    console.log(this.returnTicket, '2')
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
    this.router.navigate([''])
  }

  buttonContinueHandlerClick() {
    this.router.navigate(['/passangers'])
  }

  isDisabledButton() {
    if (this.returnTicket) {
      if (!this.hasFromCarusel && !this.hasToCarusel) {
        return false
      } else {
        return true
      }
    } else {
      if (!this.hasFromCarusel) {
        return false
      }
      return true
    }
  }

  ngAfterContentInit(): void {
    if (this.returnTicket) {
      this.hasToCarusel = true
    }
  }

  getDirectionHeader(from: boolean) {
    const fromCity = this.ticket?.form.city
    const toCity = this.ticket?.to.city
    if (from) return `${fromCity} to ${toCity}`
    else return `${toCity} to ${fromCity}`
  }


}