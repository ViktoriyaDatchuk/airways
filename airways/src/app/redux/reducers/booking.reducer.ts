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
  isRoundTrip: true,
  travelFrom: [],
  travelTo: [],
  ticketFrom: null,
  ticketTo: null,
  isLoadingFlight: false,
};

export const bookingReducer = createReducer(
  initialState,
  on(bookinActions.setDataTravel, (state, { booking }) => ({
    ...state,
    ...booking,
  })),
  on(bookinActions.setFrom, (state, { from }) => ({
    ...state,
    from,
  })),
  on(bookinActions.setTo, (state, { destination }) => ({
    ...state,
    destination,
  })),
  on(bookinActions.setDateFrom, (state, { dateFrom }) => ({
    ...state,
    dateFrom,
  })),
  on(bookinActions.setDateTo, (state, { dateTo }) => ({
    ...state,
    dateTo,
  })),
  on(bookinActions.setAdultsCount, (state, { adults }) => ({
    ...state,
    adults,
  })),
  on(bookinActions.setChildsCount, (state, { childs }) => ({
    ...state,
    childs,
  })),
  on(bookinActions.setInfantsCount, (state, { infants }) => ({
    ...state,
    infants,
  })),
  on(bookinActions.setTypeTrip, (state, { isRoundTrip }) => ({
    ...state,
    isRoundTrip,
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
