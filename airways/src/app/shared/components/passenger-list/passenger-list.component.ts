import { Component, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { PassengerType } from '../../models/types.model';
import { Store } from '@ngrx/store';
import { IDataTravel } from 'src/app/redux/models/models';
import { Observable } from 'rxjs';
import { selectAdultsCount, selectChildsCount, selectInfantsCount } from 'src/app/redux/selectors/booking.selectors';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss'],
})
export class PassengerListComponent implements OnInit {
  passengerList: PassengerType[] = [
    { title: 'Adults', age: '14+ years' },
    { title: 'Child', age: '2-14 years' },
    { title: 'Infant', age: '0-2 years' },
  ];

  @ViewChild('buttonList') buttonList!: HTMLDivElement

  isOpen = false

  isTouched = false

  Adults$: Observable<number>
  Childs$: Observable<number>
  Infants$: Observable<number>

  Adults!: number
  Childs!: number
  Infants!: number

  text: string = 'adult 0, child 0, infant 0'

  isValid = false

  @Output() validStatus = new EventEmitter<boolean>();

  constructor(private state: Store<{ booking: IDataTravel }>) {
    this.Adults$ = this.state.select(selectAdultsCount)
    this.Childs$ = this.state.select(selectChildsCount)
    this.Infants$ = this.state.select(selectInfantsCount)
    

    this.Adults$.subscribe((el) => { 
      this.Adults = el
      this.select()
    })
    this.Childs$.subscribe((el) => { 
      this.Childs = el
      this.select()
    })
    this.Infants$.subscribe((el) => { 
      this.Infants = el
      this.select()
    })
  }

  select() {
    this.Adults$ = this.state.select(selectAdultsCount)
    this.Childs$ = this.state.select(selectChildsCount)
    this.Infants$ = this.state.select(selectInfantsCount)
    this.getPasString()
    this.setIsValid()
  }

  ngOnInit(): void {
    
  }

  getPasString() {
    this.text = `${this.Adults} Adult, ${this.Childs} Child, ${this.Infants} Infant`
  }

  openList(event: MouseEvent) {
    this.isOpen = !this.isOpen
    if (this.isTouched) {
      this.setIsValid()
    }
    this.isTouched = true
  }

  setIsValid() {
    const isValid = this.Adults + this.Childs + this.Infants
    this.isValid =  isValid  === 0 && this.isTouched ? false : true
    this.emitValidStatus()
  }

  emitValidStatus() {
    this.validStatus.emit(this.isValid)
  }

}

