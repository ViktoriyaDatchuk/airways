import { ISliderData } from "src/app/booking/booking.model";
import { IFlightModelWithoutOtherFlights } from "src/app/shared/models/types.model";

export interface IDataTravel {
  from: string;
  destination: string;
  dateFrom: string;
  dateTo: string;
  adults: number;
  childs: number;
  infants: number;
  travelFrom: ISliderData[];
  travelTo: ISliderData[];
  ticketFrom: IFlightModelWithoutOtherFlights | null;
  ticketTo: IFlightModelWithoutOtherFlights | null;
  isLoadingFlight: boolean;
  isRoundTrip: boolean;
  personsData: IPersonsData[];
  personsContacts: IPersonsContact | null;
}

export interface ISettings {
  date: string;
  currency: string;
}

export interface IPersonsData {
  name: string;
  lastName: string;
  sex: string;
  birthDay: string;
  specialAssistance?: string;
  countWeight?: string;
  infant: boolean;
}

export interface IPersonsContact {
  code: string;
  phone: string;
  email: string;
}