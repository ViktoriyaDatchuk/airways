import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BookingComponent } from './pages/booking/booking.component';
import { RouterModule } from '@angular/router';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';



@NgModule({
  declarations: [
    BookingComponent,
    FlightSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: BookingComponent }]),
  ]
})
export class BookingModule { }
