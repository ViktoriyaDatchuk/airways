import { Component, Input } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { PassengerType } from '../../models/types.model';
import { IDataTravel } from 'src/app/redux/models/models';
import { Store } from '@ngrx/store';
import { setAdultsCount, setChildsCount, setInfantsCount } from 'src/app/redux/actions/booking-main.actions';

@Component({
  selector: 'app-passenger-type',
  templateUrl: './passenger-type.component.html',
  styleUrls: ['./passenger-type.component.scss'],
  providers: [CounterService],
})
export class PassengerTypeComponent {
  @Input() public passenger!: PassengerType;

  typesPassengers = ['Adults', 'Child', 'Infant']

  constructor(
    private counter: CounterService, 
    private state: Store<{ booking: IDataTravel }>,
    ) {}

  getCounter() {
    return this.counter.counter;
  }

  setChanges() {
    if (this.passenger.title === this.typesPassengers[0]) {
      this.state.dispatch(setAdultsCount(this.getCounter()))
    } else if (this.passenger.title === this.typesPassengers[1]) {
      this.state.dispatch(setChildsCount(this.getCounter()))
    } else if (this.passenger.title === this.typesPassengers[2]) {
      this.state.dispatch(setInfantsCount(this.getCounter()))
    }
  }

  increase(event: MouseEvent) {
    event.stopPropagation();
    this.counter.increase();
    this.setChanges()
  }

  decrease(event: MouseEvent) {
    event.stopPropagation();
    this.counter.decrease();
    this.setChanges()
  }

  disabled() {
    return this.getCounter() > 0 ? false : true;
  }


}
