import { Component, Input, OnInit } from '@angular/core';
import { AGEGROUP, IPassengerFare, IPriceData } from '../../booking.model';
import { ITariff } from '../../booking.model';
import { tariffs } from '../../booking.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() public passFare!: IPriceData;

  getTitle() {
    return `${this.passFare.count} x ${this.passFare.str} Fare`;
  }
}
