import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { trips } from '../../tripsmock';
import { IDataTravel } from '../../tripsmock';
import { DataService } from 'src/app/shared/services/data.service';
import { Store } from '@ngrx/store';
import {
  SettingsState,
  selectCurrency,
} from 'src/app/redux/selectors/settings.selector';
import { BookingTableComponent } from 'src/app/shared/components/booking-table/booking-table.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, AfterViewChecked {
  @ViewChild(BookingTableComponent) child!: BookingTableComponent;

  public trips: IDataTravel[] = trips;

  public selected: number = 0;

  public sum!: number;

  public currencyIcon!: string;

  constructor(
    private dataService: DataService,
    private store: Store<SettingsState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectCurrency).subscribe((data) => {
      this.currencyIcon =
        this.dataService.currencyIcons[
          data as keyof typeof this.dataService.currencyIcons
        ];
    });
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.selected = this.child.selected;
      this.sum = this.child.sum;
    });
  }
}
