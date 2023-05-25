import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { BookingTableComponent } from './components/booking-table/booking-table.component';
import { PassengerTypeComponent } from './components/passenger-type/passenger-type.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';


@NgModule({
  declarations: [EditMenuComponent, BookingTableComponent, PassengerTypeComponent, PassengerListComponent, FlightSearchComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EditMenuComponent,
    BookingTableComponent,
    PassengerListComponent,
    FlightSearchComponent,
  ],
})
export class SharedModule {}
