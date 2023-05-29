import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BookingComponent } from './pages/booking/booking.component';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CorouselComponent } from './components/corousel/corousel.component';
import { SwiperModule } from 'swiper/angular';
import { TableComponent } from './components/table/table.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { OrderComponent } from './components/order/order.component';
import { FareComponent } from './components/fare/fare.component';
import { PersonComponent } from './components/person/person.component';
import { aboutGuard } from '../shared/guards/auth.guard';

@NgModule({
  declarations: [
    BookingComponent,
    TicketsComponent,
    CorouselComponent,
    TableComponent,
    SummaryComponent,
    OrderComponent,
    FareComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild([
      { path: '', component: BookingComponent },
      { path: 'summary', component: SummaryComponent, canActivate: [aboutGuard] },
    ]),
  ],
})
export class BookingModule {}
