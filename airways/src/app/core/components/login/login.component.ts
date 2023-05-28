import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setIsAuth, setIsAuthOpenWindow, setNewUser } from 'src/app/redux/actions/auth.actions';
import { IAuthStore } from 'src/app/redux/models/models';
import { AirportsService } from 'src/app/shared/services/airways.service';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(
    private airportService: AirportsService, 
    private store: Store<{auth: IAuthStore}>,
    private cookies: CookieService
    ){}

  checkIfError(field: string, error: string) {
    return this.signin.get(field)?.errors?.[`${error}`];
  }

  submit()   {
    this.airportService.login(this.signin.get('email')?.value || '', this.signin.get('password')?.value || '')
    .subscribe((token) => {
      this.store.dispatch(setIsAuth(true))
      this.cookies.set('auth', token.token)
      this.store.dispatch(setIsAuthOpenWindow(false))
      this.airportService.authMe(token.token).subscribe((el) => {
        this.store.dispatch(setNewUser({
          birthday: el.dateOfBirth,
          citizenship: el.citizenship,
          countryCode: el.countryCode,
          email: el.email,
          lastName: el.lastName,
          name: el.firstName,
          phone: el.phone,
          sex: el.gender
        }))
      })
    })



  }

}
