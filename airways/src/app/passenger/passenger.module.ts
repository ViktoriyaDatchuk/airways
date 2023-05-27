import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerComponent } from './page/passenger/passenger.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PersonComponent } from './components/person/person.component';



@NgModule({
  declarations: [
    PassengerComponent,
    PersonComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: PassengerComponent }]),
  ]
})
export class PassengerModule { }
