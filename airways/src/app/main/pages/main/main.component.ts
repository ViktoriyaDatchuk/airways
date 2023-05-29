import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatRadioChange } from '@angular/material/radio';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, startWith } from 'rxjs';
import { setDateFrom, setDateTo, setFrom, setTo, setTypeTrip } from 'src/app/redux/actions/booking-main.actions';
import { IDataTravel } from 'src/app/redux/models/models';
import { AirportModel } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/services/airways.service';
import { CookieService } from 'ngx-cookie-service';
import { setIsAuth, setNewUser } from 'src/app/redux/actions/auth.actions';

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
  isValid = true;
  passengerIsValid = false;

  constructor(
    private airportService: AirportsService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private store: Store<{ booking: IDataTravel }>,
    private authStore: Store<{ auth: IDataTravel }>,
    private cookieService: CookieService
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
      if (this.cookieService.get('auth')) {
        this.airportService.authMe(this.cookieService.get('auth')).subscribe((el) => {
          this.authStore.dispatch(setIsAuth(true))
          this.authStore.dispatch(setNewUser({
            birthday: el.dateOfBirth,
            citizenship: el.citizenship,
            countryCode: el.countryCode,
            email: el.email,
            lastName: el.lastName,
            name: el.firstName,
            phone: el.phone,
            sex: el.gender
          }))
        })
      }
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

  passengerValid(event: boolean) {
    this.passengerIsValid = event
  }

  validateForm() {
    let form
    if (this.return) {
      form = this.destControl.invalid || this.fromControl.invalid || this.endDateControl.invalid || this.startDateControl.invalid
    } else {
      form = this.destControl.invalid|| this.fromControl.invalid || this.startDateControl.invalid
    }

    this.isValid = !form && this.passengerIsValid
  }

  searchItems() {
    this.validateForm()
    if (!this.isValid) return

    this.store.dispatch(setFrom(this.fromControl.value || 'AMS'))
    this.store.dispatch(setTo(this.destControl.value || 'MAD'))
    this.store.dispatch(setDateFrom(new Date(this.startDateControl.value || '2023-09-21T00:00:00.000Z').toISOString()))
    if (this.return) {
      this.store.dispatch(setDateTo(new Date(this.endDateControl.value || '2023-10-11T00:00:00.000Z').toISOString()))
    }

    this.router.navigate(['/booking'])

    console.log(this.destControl.value, this.fromControl.value, new Date(this.startDateControl.value || '2023-09-21T00:00:00.000Z').toISOString(), new Date(this.endDateControl.value || '2023-10-11T00:00:00.000Z').toISOString())
  }

}
