import { Component, OnInit } from '@angular/core';
import { trips } from '../../tripsmock';
import { IDataTravel } from '../../tripsmock';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public trips: IDataTravel[] = trips;

  public sum: number = 0;

  ngOnInit(): void {
    this.sum = this.trips.reduce((sum, trip) => sum + trip.price, 0);
  }
}
