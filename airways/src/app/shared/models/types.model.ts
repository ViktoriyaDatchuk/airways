export interface AirportModel {
  key: string;
  name: string;
  country: string;
  city: string;
}

export interface RegistrationModel {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  countryCode: string;
  phone: string;
  citizenship: string;
}

export interface User extends RegistrationModel {
  id: number;
}

export type LoginModel = Pick<User, 'email' | 'password'>;

export interface TokenModel {
  token: string;
}

export type UserRes = Omit<User, 'id' | 'password'>;

export interface SearchFlightModel {
  fromKey: string;
  toKey: string;
  forwardDate: string;
  backDate?: string;
}

export interface PriceModel {
  eur: number;
  usd: number;
  rub: number;
  pln: number;
}

export interface FlightModel {
  form: AirportModel;
  to: AirportModel;
  takeoffDate: string;
  landingDate: string;
  timeMins: number;
  avaible: number;
  price: PriceModel;
}

export interface PassengerType {
  title: string;
  age: string;
}
