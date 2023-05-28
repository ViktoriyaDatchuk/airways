import { createReducer, on } from '@ngrx/store';
import { IUserFlights } from '../models/models';
import { addPaidFlight } from '../actions/user.action';

export const initialState: IUserFlights = {
  paidFlight: [],
};

export const userReducer = createReducer(
  initialState,
  on(addPaidFlight, (state, { fligth }) => ({
    ...state,
    paidFlight: [...state.paidFlight, fligth],
  }))
);
