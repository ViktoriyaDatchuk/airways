import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { AirportModel } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/service/airways.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  myControl = new FormControl('');
  myControl2 = new FormControl('');
  airports: AirportModel[] = [];
  filteredOptions!: Observable<AirportModel[]>;
  filteredOptions2!: Observable<AirportModel[]>;

  constructor(private airportService: AirportsService) {}

  ngOnInit() {
    this.getBooks();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): AirportModel[] {
    const filterValue = value.toLowerCase();

    return this.airports.filter((airport) =>
      airport.city.toLowerCase().includes(filterValue)
    );
  }

  getBooks() {
    this.airportService.all().subscribe((airports) => {
      this.airports = airports;
    });
  }
}
