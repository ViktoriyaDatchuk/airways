import { createReducer, on } from '@ngrx/store';
import * as bookinActions from '../actions/booking-main.actions';
import { IDataTravel } from '../models/models';

export const initialState: IDataTravel = {
  from: '',
  destination: '',
  dateFrom: '',
  dateTo: '',
  adults: 0,
  childs: 0,
  infants: 0,
  travelFrom: [],
  travelTo: [],
  isLoadingFlight: false,
  isRoundTrip: true,
  ticketFrom: null,
  ticketTo: null,
};

export const bookingReducer = createReducer(
  initialState,
  on(bookinActions.setDataTravel, (state, { booking }) => ({
    ...state,
    ...booking,
  })),
  on(bookinActions.setDataTravelFrom, (state, { from }) => ({
    ...state,
    travelFrom: from,
  })),
  on(bookinActions.setDataTravelTo, (state, { to }) => ({
    ...state,
    travelTo: to,
  })),
  on(bookinActions.setTicketFrom, (state, { ticketFrom }) => ({
    ...state,
    ticketFrom,
  })),
  on(bookinActions.setTicketTo, (state, { ticketTo }) => ({
    ...state,
    ticketTo,
  })),
  on(bookinActions.setIsLoadingFlight, (state, { loading }) => ({
    ...state,
    isLoadingFlight: loading,
  }))
);
