import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {callingCode} from '../../../shared/data/calling-code'
import { IPersonsContact } from 'src/app/redux/models/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  tels = callingCode

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      mobileControl: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]),
      phoneRegionControl: new FormControl('+93', [Validators.required]),
    })
  }

  checkIfError(field: string, error: string) {
    return this.contactForm.get(field)?.errors?.[`${error}`];
  }
  
}
