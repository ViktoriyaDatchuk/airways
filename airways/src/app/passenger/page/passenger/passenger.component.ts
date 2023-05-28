import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  IDataTravel,
  IPersonsContact,
  IPersonsData,
} from 'src/app/redux/models/models';
import {
  selectAdultsCount,
  selectChildsCount,
  selectInfantsCount,
  selectPersonsContacts,
  selectPersonsData,
} from 'src/app/redux/selectors/booking.selectors';
import { PersonComponent } from '../../components/person/person.component';
import { ContactComponent } from '../../components/contact/contact.component';
import {
  setPersonData,
  setPersonsContact,
} from 'src/app/redux/actions/booking-main.actions';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit, AfterViewInit {
  @ViewChildren(PersonComponent) personChild!: PersonComponent[];
  @ViewChild(ContactComponent) contactChild!: ContactComponent;

  form = new FormGroup({});

  adults$!: Observable<number>;
  childs$!: Observable<number>;
  infants$!: Observable<number>;

  adults = 0;
  childs = 0;
  infants = 0;

  constructor(
    private store: Store<{ booking: IDataTravel }>,
    private router: Router
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.adults$ = this.store.select(selectAdultsCount);
    this.childs$ = this.store.select(selectChildsCount);
    this.infants$ = this.store.select(selectInfantsCount);
    this.adults$.subscribe((el) => {
      this.adults = el;
    });
    this.childs$.subscribe((el) => {
      this.childs = el;
    });
    this.infants$.subscribe((el) => {
      this.infants = el;
    });
  }

  getArray(number: number) {
    const arr = new Array(number).fill('');
    return arr;
  }

  buttonBackHandlerClick() {
    this.router.navigate(['/booking']);
  }

  buttonContinueHandlerClick() {
    this.dispatchPersonData();
    this.router.navigate(['/booking/summary']);
  }

  isDisabledButton() {
    if (!this.contactChild || !this.personChild) return true;
    if (this.contactChild.contactForm.invalid) {
      return true;
    }
    this.personChild.some((el) => {
      if (el.personForm.invalid) {
        return true;
      }
      return false;
    });
    return false;
  }

  dispatchPersonData() {
    this.store.dispatch(setPersonsContact(this.getContactObject()));

    this.personChild.forEach((el) => {
      const data = this.getPersonsDataObject(el);
      this.store.dispatch(setPersonData(data));
    });
  }

  getContactObject(): IPersonsContact {
    return {
      code:
        this.contactChild.contactForm?.get('phoneRegionControl')?.value || '',
      email: this.contactChild.contactForm?.get('emailControl')?.value || '',
      phone: this.contactChild.contactForm?.get('mobileControl')?.value || '',
    };
  }

  getPersonsDataObject(person: PersonComponent): IPersonsData {
    return {
      name: person.personForm.get('firstNameControl')?.value || 'Aboba',
      sex: person.personForm.get('sexControl')?.value || 'Male',
      lastName: person.personForm.get('secondNameControl')?.value || 'Boban',
      birthDay: person.personForm.get('birthdayControl')?.value || '',
      infant: person.infant,
      specialAssistance:
        person.personForm.get('specAssistance')?.value || undefined,
      countWeight: person.personForm.get('countControl')?.value || undefined,
    };
  }
}
