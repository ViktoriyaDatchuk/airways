import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatRadioChange } from '@angular/material/radio';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, map, startWith } from 'rxjs';
import { setTypeTrip } from 'src/app/redux/actions/booking-main.actions';
import { IDataTravel } from 'src/app/redux/models/models';
import { AirportModel } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/services/airways.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  tripTypes = ['round-trip', 'one-way']
  return = true;
  fromControl = new FormControl('', Validators.required);
  destControl = new FormControl('', Validators.required);
  startDateControl = new FormControl('', Validators.required);
  endDateControl = new FormControl('', this.return ? Validators.required : null);
  
  airports: AirportModel[] = [];
  filteredFrom!: Observable<AirportModel[]>;
  filteredDest!: Observable<AirportModel[]>;
  isValid = false;

  constructor(
    private airportService: AirportsService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private store: Store<{ booking: IDataTravel }>
  ) {
    this.matIconRegistry.addSvgIcon(
      'switch',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/switch.svg')
    );
  }

  ngOnInit() {
    this.getAirports();
    this.filteredFrom = this.fromControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.filteredDest = this.destControl.valueChanges.pipe(
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

  getAirports() {
    this.airportService.all().subscribe((airports) => {
      this.airports = airports;
    });
  }

  changeInputFields() {
    const tempDest = this.destControl.value
    const tempFrom = this.fromControl.value
    this.fromControl.setValue(tempDest)
    this.destControl.setValue(tempFrom)
  }

  changeTrip(e: MatRadioChange) {
    if (e.value === this.tripTypes[0]) {
      this.return = true
      this.store.dispatch(setTypeTrip(true))
    } else if (e.value === this.tripTypes[1]) {
      this.return = false
      this.store.dispatch(setTypeTrip(false))
    }
  }


}
