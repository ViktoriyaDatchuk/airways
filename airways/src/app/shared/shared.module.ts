import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { BookingTableComponent } from './components/booking-table/booking-table.component';

@NgModule({
  declarations: [EditMenuComponent, BookingTableComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EditMenuComponent,
    BookingTableComponent,
  ],
})
export class SharedModule {}
