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
};

export const bookingReducer = createReducer(
  initialState,
  on(bookinActions.setDataTravel, (state, { booking }) => ({
    ...state,
    ...booking,
  }))
);
