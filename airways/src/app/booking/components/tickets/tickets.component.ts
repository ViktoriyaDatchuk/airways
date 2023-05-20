import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataTravel } from 'src/app/redux/models/models';
import { Store } from '@ngrx/store';
import { selectFlightIsLoading } from 'src/app/redux/selectors/booking.selectors';
import { IFlightModel } from 'src/app/shared/models/types.model';
import { FROMTOSTRINGS } from '../../booking.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements AfterViewInit, AfterContentInit, AfterContentChecked {
  
  
  @Input() return!: boolean;

  isLoadingFlight$: Observable<boolean>

  isLoading = false;

  hasFromCarusel = true;

  hasToCarusel = false;

  constructor(private store: Store<{ booking: IDataTravel }>, private router: Router) {
    
    this.isLoadingFlight$ = this.store.select(selectFlightIsLoading)
    this.isLoadingFlight$.subscribe((loading) => {
      this.isLoading = !loading
    })
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
    if (this.return) {
      if (!this.hasFromCarusel && !this.hasToCarusel) {
        return false
      } else {
        return true
      }
    } else {
      // return this.hasFromCarusel
      if (!this.hasFromCarusel) {
        return false
      }
      return true
    }
  }

  ngAfterContentInit(): void {
    
    if (this.return) {
      this.hasToCarusel = true
    }
  }

  ngAfterContentChecked(): void {
    
  }
  
  

  ngAfterViewInit(): void {
    
    
  }


}
