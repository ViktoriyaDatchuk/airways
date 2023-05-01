import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassengerTypeComponent } from './components/passenger-type/passenger-type.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';

@NgModule({
  declarations: [PassengerTypeComponent, PassengerListComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PassengerListComponent,
  ],
})
export class SharedModule {}
