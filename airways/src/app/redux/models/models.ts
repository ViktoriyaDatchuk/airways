import { ISliderData } from 'src/app/booking/booking.model';
import {
  IFlightModel,
  IFlightModelWithoutOtherFlights,
  IFligthForCart,
} from 'src/app/shared/models/types.model';

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
}

export interface ISettings {
  date: string;
  currency: string;
}

export interface ICartFlights {
  flight: IFligthForCart[];
}
