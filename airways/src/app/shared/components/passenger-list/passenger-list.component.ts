import { Component, ViewChild } from '@angular/core';
import { PassengerType } from '../../models/types.model';
import { MatButton } from '@angular/material/button';

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

  @ViewChild('buttonList') buttonList!: HTMLDivElement

  isOpen = false

  getPasString() {
    return `adult ${0}, child ${0}, infant ${0}`;
  }

  openList() {
    this.isOpen = !this.isOpen
  }

}

