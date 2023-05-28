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

export interface IFlightModel {
  flightNumber: string;
  form: {
    key: string;
    name: string;
    city: string;
    gmt: string;
    country: string;
  };
  landingDate: string;
  price: { eur: number; usd: number; rub: number; pln: number };
  seats: { total: number; avaible: number };
  takeoffDate: string;
  timeMins: number;
  to: { key: string; name: string; city: string; gmt: string; country: string };
  otherFlights: IOtherFlights;
}

export type IFlightModelWithoutOtherFlights = Omit<
  IFlightModel,
  'otherFlights'
>;
// export type IFlightModelWithoutOtherFlights = Omit<Partial<IFlightModel>, 'otherFlights'>

export interface IOtherFlights {
  '1'?: IFlightModelWithoutOtherFlights;
  '2'?: IFlightModelWithoutOtherFlights;
  '3'?: IFlightModelWithoutOtherFlights;
  '4'?: IFlightModelWithoutOtherFlights;
  '5'?: IFlightModelWithoutOtherFlights;
  '-1'?: IFlightModelWithoutOtherFlights;
  '-2'?: IFlightModelWithoutOtherFlights;
  '-3'?: IFlightModelWithoutOtherFlights;
  '-4'?: IFlightModelWithoutOtherFlights;
  '-5'?: IFlightModelWithoutOtherFlights;
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

export interface IFligthForCart extends IFlightModelWithoutOtherFlights {
  selected: boolean;
  type: string;
  adults: number;
  childs: number;
  infants: number;
  takeoffDateBack?: string;
  landingDateBack?: string;
}
