import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {callingCode} from '../../../shared/data/calling-code'
import { IAuthStore } from 'src/app/redux/models/models';
import { Store } from '@ngrx/store';
import { setIsAuth, setIsAuthOpenWindow, setNewUser } from 'src/app/redux/actions/auth.actions';
import { selectFeature } from 'src/app/redux/selectors/auth.selectors';
import { AirportsService } from 'src/app/shared/services/airways.service';
import { RegistrationModel, User } from 'src/app/shared/models/types.model';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  tels = callingCode;

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
    sex: new FormControl(''),
  });

  constructor(
    private store: Store<{ auth: IAuthStore}>,
    private airportService: AirportsService,
    private cookies: CookieService,
    ) {

  }

  checkIfError(field: string, error: string) {
    return this.signup.get(field)?.errors?.[`${error}`];
  }

  getInput(filedName: string) {
    return this.signup.get(filedName)
  }

  submit() {
    // this.store.dispatch(setNewUser(this.createUserData()))
    this.airportService.registration(this.createUserData()).subscribe((el) => {
      this.cookies.set('auth', el.token)
      this.store.dispatch(setIsAuthOpenWindow(false))
    })
    // this.store.select(selectFeature).subscribe((el) => {
    //   console.log(el)
    // })
    // console.log(this.signup)
    console.log('submit')
  }

  createUserData(): RegistrationModel {
    return {
      dateOfBirth: this.signup.get('birthday')?.value || '',
      citizenship: this.signup.get('citizenship')?.value || '',
      countryCode: this.signup.get('phoneRegion')?.value || '',
      email: this.signup.get('email')?.value || '',
      lastName: this.signup.get('lastname')?.value || '',
      firstName: this.signup.get('name')?.value || '',
      phone: this.signup.get('phoneNumber')?.value || '',
      gender: this.signup.get('sex')?.value || '',
      password: this.signup.get('password')?.value || ''
    }
  }


}
