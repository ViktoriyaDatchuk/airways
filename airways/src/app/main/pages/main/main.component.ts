import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, map, startWith } from 'rxjs';
import { AirportModel } from 'src/app/shared/models/types.model';
import { AirportsService } from 'src/app/shared/services/airways.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  fromControl = new FormControl('');
  destControl = new FormControl('');
  airports: AirportModel[] = [];
  filteredFrom!: Observable<AirportModel[]>;
  filteredDest!: Observable<AirportModel[]>;

  constructor(
    private airportService: AirportsService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
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
}
