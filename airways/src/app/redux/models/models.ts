import { ISliderData } from "src/app/booking/booking.model";
import { IFlightModel, IFlightModelWithoutOtherFlights } from "src/app/shared/models/types.model";

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
}
