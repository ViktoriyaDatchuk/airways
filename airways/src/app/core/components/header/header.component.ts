import { Component } from '@angular/core';

interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public page: string = 'book';

  public datesFormat: Select[] = [
    { value: 'date-0', viewValue: 'MM/DD/YYYY' },
    { value: 'date-1', viewValue: 'DD/MM/YYYY' },
    { value: 'date-2', viewValue: 'YYYY/DD/MM' },
    { value: 'date-3', viewValue: 'YYYY/MM/DD' },
  ];

  public currency: Select[] = [
    { value: 'cur-0', viewValue: 'EUR' },
    { value: 'cur-1', viewValue: 'USA' },
    { value: 'cur-2', viewValue: 'RUB' },
    { value: 'cur-3', viewValue: 'PLN' },
  ];

  public backgroundColor: string = 'rgba(116, 118, 122, 0.2)';

  public bookingFilter: string =
    'invert(75%) sepia(1%) saturate(4760%) hue-rotate(211deg) brightness(106%) contrast(96%)';

  public cartFilter: string =
    'invert(86%) sepia(38%) saturate(4871%) hue-rotate(209deg) brightness(97%) contrast(89%)';

  public hidden: boolean = true;

  public badgeCounter: number = 2;

  public isAuth: boolean = false;

  public userName: string = 'Viktoryia';
}
