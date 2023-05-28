import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Store } from '@ngrx/store';
import {
  SettingsState,
  selectCurrency,
} from 'src/app/redux/selectors/settings.selector';
import { BookingTableComponent } from 'src/app/shared/components/booking-table/booking-table.component';
import {
  CartState,
  selectFeature,
} from 'src/app/redux/selectors/cart.selector';
import { IFligthForCart } from 'src/app/shared/models/types.model';
import { UserState } from 'src/app/redux/selectors/user.selector';
import { addPaidFlight } from 'src/app/redux/actions/user.action';
import { deleteFligth } from 'src/app/redux/actions/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, AfterViewChecked {
  @ViewChild(BookingTableComponent) child!: BookingTableComponent;

  public trips!: IFligthForCart[];

  public selected: number = 0;

  public sum!: number;

  public currencyIcon!: string;

  constructor(
    private dataService: DataService,
    private store: Store<SettingsState>,
    private cartStore: Store<CartState>,
    private userStore: Store<UserState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectCurrency).subscribe((data) => {
      this.currencyIcon =
        this.dataService.currencyIcons[
          data as keyof typeof this.dataService.currencyIcons
        ];
    });
    this.cartStore.select(selectFeature).subscribe((data) => {
      this.trips = data.flight;
    });
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.selected = this.child.selected;
      this.sum = this.child.sum;
    });
  }

  addFlightToUserStore() {
    this.trips.forEach((trip) => {
      if (trip.selected === true) {
        this.userStore.dispatch(addPaidFlight({ fligth: trip }));
        this.cartStore.dispatch(deleteFligth({ number: trip.flightNumber }));
      }
    });
  }
}
