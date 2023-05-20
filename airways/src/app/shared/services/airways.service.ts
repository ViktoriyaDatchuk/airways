import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AirportModel,
  IFlightModel,
  LoginModel,
  SearchFlightModel,
  TokenModel,
  UserRes,
} from '../models/types.model';
import { RegistrationModel } from '../models/types.model';
import { User } from '../models/types.model';
import { Store } from '@ngrx/store';
import { IDataTravel } from 'src/app/redux/models/models';
import { setIsLoadingFlight } from 'src/app/redux/actions/booking-main.actions';

const BASE_URL = 'https://api.air-ways.online';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor(private http: HttpClient, private state: Store<{ booking: IDataTravel }>) {}
  all() {
    const airports_url = `${BASE_URL}/search/airport`;
    return this.http.get<AirportModel[]>(airports_url);
  }

  searchFlight(search: SearchFlightModel) {
    const flight_url = `${BASE_URL}/search/flight`;
    return this.http.post<IFlightModel[]>(
      `${flight_url}`,
      JSON.stringify(search),
      HEADER
    );
  }

  authMe() {
    const auth_url = `${BASE_URL}/auth/me`;
    return this.http.get<UserRes>(auth_url);
  }

  login(login: string, password: string) {
    const login_url = `${BASE_URL}/auth/login`;
    const logInfo: LoginModel = {
      email: login,
      password: password,
    };
    return this.http.post<TokenModel>(
      `${login_url}`,
      JSON.stringify(logInfo),
      HEADER
    );
  }

  registration(user: RegistrationModel) {
    const reg_url = `${BASE_URL}/auth/registration`;

    return this.http.post<User>(`${reg_url}`, JSON.stringify(user), HEADER);
  }
}
