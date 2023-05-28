import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerComponent } from './page/passenger/passenger.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PersonComponent } from './components/person/person.component';
import { ContactComponent } from './components/contact/contact.component';
import { aboutGuard } from '../shared/guards/auth.guard';



@NgModule({
  declarations: [
    PassengerComponent,
    PersonComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: PassengerComponent, canActivate: [aboutGuard] }]),
  ]
})
export class PassengerModule { }
