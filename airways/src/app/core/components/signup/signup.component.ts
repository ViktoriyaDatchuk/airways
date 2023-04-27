import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  tels = ['Afghanistan (+93)', 'Russia (+7)'];
  citizenship = ['Arab', 'ne Arab', 'Russian', 'Naglosaks']

  signup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.pattern(/\D/), Validators.required]),
    lastname: new FormControl('', [Validators.pattern(/\D/), Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    phoneRegion: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/\d/),]),
    citizenship: new FormControl('', [Validators.required,]),
    policy: new FormControl('', [Validators.pattern(/true/)]),

  });

  checkIfError(field: string, error: string) {
    return this.signup.get(field)?.errors?.[`${error}`];
  }

  getInput(filedName: string) {
    return this.signup.get(filedName)
  }

  submit() {
    console.log(this.signup)
    console.log('submit')
  }


}
