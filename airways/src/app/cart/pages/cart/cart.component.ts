import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { trips } from '../../tripsmock';
import { IDataTravel } from '../../tripsmock';
import { BookingTableComponent } from 'src/app/shared/components/booking-table/booking-table.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements AfterViewChecked {
  @ViewChild(BookingTableComponent) child!: BookingTableComponent;

  public trips: IDataTravel[] = trips;

  public selected: number = 0;

  public sum!: number;

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.selected = this.child.selected;
      this.sum = this.child.sum;
    });
  }
}
