import { Component, Input } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { PassengerType } from '../../models/types.model';

@Component({
  selector: 'app-passenger-type',
  templateUrl: './passenger-type.component.html',
  styleUrls: ['./passenger-type.component.scss'],
  providers: [CounterService],
})
export class PassengerTypeComponent {
  @Input() public passenger!: PassengerType;

  constructor(private counter: CounterService) {}

  getCounter() {
    return this.counter.counter;
  }
  increase() {
    return this.counter.increase();
  }
  decrease() {
    return this.counter.decrease();
  }
  disabled() {
    return this.getCounter() > 0 ? false : true;
  }
}
