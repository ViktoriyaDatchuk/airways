import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required])
  });
  hide = true;

  checkIfError(field: string, error: string) {
    return this.signin.get(field)?.errors?.[`${error}`];
  }

  submit() {
    console.log('submit')
  }
}
