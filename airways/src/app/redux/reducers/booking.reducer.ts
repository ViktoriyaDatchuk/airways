import { createReducer, on } from '@ngrx/store';
import * as bookinActions from '../actions/booking-main.actions';
import { IDataTravel } from '../models/models';



export const initialState: IDataTravel = {
    from: "",
    destination: "",
    dates: "",
    passengers: "",
};

export const bookingReducer = createReducer(
  initialState,
  on(bookinActions.setDataTravel, (state, { booking }) => ({ ...state, ...booking })),
);
