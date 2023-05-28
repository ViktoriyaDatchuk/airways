import { createReducer, on } from '@ngrx/store';
import {
  addFlight,
  changeSelected,
  deleteFligth,
} from '../actions/cart.action';
import { ICartFlights } from '../models/models';

export const initialState: ICartFlights = {
  flight: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addFlight, (state, { fligth }) => ({
    ...state,
    flight: [...state.flight, fligth],
  })),
  on(changeSelected, (state, { selected, trip }) => ({
    ...state,
    flight: state.flight.map((item) =>
      trip.flightNumber === item.flightNumber
        ? {
            ...item,
            selected: selected,
          }
        : item
    ),
  })),
  on(deleteFligth, (state, { number }) => ({
    ...state,
    flight: state.flight.filter((item) => item.flightNumber !== number),
  }))
);
