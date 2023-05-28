import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input() hasFooter = true
  @Input() infant = false

  personForm: FormGroup

  constructor() {
    this.personForm = new FormGroup({
      firstNameControl: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      secondNameControl: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      sexControl: new FormControl(''),
      birthdayControl: new FormControl('', Validators.required),
      countControl: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\d*$')]),
      specAssistance: new FormControl(false),
    })
  }


  hasLugage = false;


  changeHasLugage() {
    this.hasLugage = !this.hasLugage
  }

  checkIfError(field: string, error: string) {
    return this.personForm.get(field)?.errors?.[`${error}`];
  }

}
