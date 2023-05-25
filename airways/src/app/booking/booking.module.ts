import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BookingComponent } from './pages/booking/booking.component';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CorouselComponent } from './components/corousel/corousel.component';
import { SwiperModule } from 'swiper/angular';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    BookingComponent,
    TicketsComponent,
    CorouselComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild([{ path: '', component: BookingComponent }]),
  ],
  
})
export class BookingModule { }
