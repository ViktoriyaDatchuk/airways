import { createReducer, on } from '@ngrx/store';
import { IFlightModel } from 'src/app/shared/models/types.model';
import { addFlight } from '../actions/cart.action';

export const initialState: IFlightModel[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addFlight, (state, { fligth }) => ({
    ...state,
    fligth,
  }))
);
