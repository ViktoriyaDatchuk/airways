import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatRadioChange } from '@angular/material/radio';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, startWith } from 'rxjs';
import { setDateFrom, setDateTo, setFrom, setIsLoadingFlight, setTo, setTypeTrip } from 'src/app/redux/actions/booking-main.actions';
import { IDataTravel } from 'src/app/redux/models/models';
import { selectAdultsCount, selectChildsCount, selectDateFrom, selectDateTo, selectFrom, selectInfantsCount, selectIsReturn, selectTo } from 'src/app/redux/selectors/booking.selectors';
import { AirportModel } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/services/airways.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {
  tripTypes = ['round-trip', 'one-way']
  isEdit = false;

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

  from$!: Observable<string>
  to$!: Observable<string>

  from = ''
  to = ''
  
  startDate$!: Observable<string>
  endDate$!: Observable<string>

  startDate: string = ''
  endDate: string = ''

  adults$!: Observable<number>
  childs$!: Observable<number>
  infant$!: Observable<number>

  adults = 0
  childs = 0
  infant = 0

  returnWay$!: Observable<boolean>
  

  constructor(
    private airportService: AirportsService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
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
    this.from$ = this.store.select(selectFrom)
    this.to$ = this.store.select(selectTo)
    this.from$.subscribe((el) => {
      this.from = el
    })
    this.to$.subscribe((el) => {
      this.to = el
    })
    this.startDate$ = this.store.select(selectDateFrom)
    this.endDate$ = this.store.select(selectDateTo)
    this.startDate$.subscribe((el) => {
      this.startDate = el
    })
    this.endDate$.subscribe((el) => {
      this.endDate = el
    })
    this.adults$ = this.store.select(selectAdultsCount)
    this.childs$ = this.store.select(selectChildsCount)
    this.infant$ = this.store.select(selectInfantsCount)
    this.adults$.subscribe((el) => {
      this.adults = el
    })
    this.childs$.subscribe((el) => {
      this.childs = el
    })
    this.infant$.subscribe((el) => {
      this.infant = el
    })

    this.fromControl.setValue(this.from)
    this.destControl.setValue(this.to)
    this.startDateControl.setValue(this.startDate)
    this.endDateControl.setValue(this.endDate)

    this.returnWay$ = this.store.select(selectIsReturn)

    this.returnWay$.subscribe((el) => {
      this.return = el
    })
  }

  passengerValid(event: boolean) {
    this.passengerIsValid = event
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
    this.store.dispatch(setIsLoadingFlight(true))
    this.store.dispatch(setFrom(this.fromControl.value || 'AMS'))
    this.store.dispatch(setTo(this.destControl.value || 'MAD'))
    this.store.dispatch(setDateFrom(new Date(this.startDateControl.value || '2023-09-21T00:00:00.000Z').toISOString()))
    if (this.return) {
      this.store.dispatch(setDateTo(new Date(this.endDateControl.value || '2023-10-11T00:00:00.000Z').toISOString()))
    }
    this.store.dispatch(setIsLoadingFlight(false))

    console.log(this.destControl.value, this.fromControl.value, new Date(this.startDateControl.value || '2023-09-21T00:00:00.000Z').toISOString(), new Date(this.endDateControl.value || '2023-10-11T00:00:00.000Z').toISOString())
  }

  getDate() {
    if (this.return) {
      return `${new Date(this.startDate).toLocaleDateString('en-US', {day: '2-digit', month: 'short'})} - ${new Date(this.endDate).toLocaleDateString('en-US', {day: '2-digit', month: 'short'})}`
    } else {
      return `${new Date(this.startDate).toLocaleDateString('en-US', {day: '2-digit', month: 'short'})}`
    }
  }

  getPerson() {
    return this.infant + this.adults + this.childs
  }

  changeFrom() {
    this.store.dispatch(setFrom(this.fromControl.value || 'AMS'))
  }
  changeTo() {
    this.store.dispatch(setTo(this.destControl.value || 'AMS'))
  }
  changeStartDate() {
    this.store.dispatch(setDateFrom(new Date(this.startDateControl.value || '2023-10-11T00:00:00.000Z').toISOString()))
  }
  changeEndDate() {
    this.store.dispatch(setDateTo(new Date(this.endDateControl.value || '2023-10-11T00:00:00.000Z').toISOString()))
  }
}
