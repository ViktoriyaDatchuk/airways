import { Component } from '@angular/core';
import { PassengerType } from '../../models/types.model';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss'],
})
export class PassengerListComponent {
  passengerList: PassengerType[] = [
    { title: 'Adults', age: '14+ years' },
    { title: 'Child', age: '2-14 years' },
    { title: 'Infant', age: '0-2 years' },
  ];
}
