import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input() hasFooter = true

  firstNameControl = new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]);
  secondNameControl = new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]);
  sexControl = new FormControl('', Validators.required);
  birthdayControl = new FormControl('', Validators.required);
  countControl = new FormControl('', [Validators.required, Validators.pattern('^[1-9]\d*$')]);

  hasLugage = false;


  changeHasLugage() {
    this.hasLugage = !this.hasLugage
  }

}
