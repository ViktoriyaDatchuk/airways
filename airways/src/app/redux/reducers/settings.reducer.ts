import { createReducer, on } from '@ngrx/store';
import { ISettings } from '../models/models';
import * as settingsAction from '../actions/settings.actoins';

export const initialState: ISettings = {
  date: 'MM/dd/YYYY',
  currency: 'eur',
};

export const settingsReducer = createReducer(
  initialState,
  on(settingsAction.setDateFormat, (state, { date }) => ({
    ...state,
    date,
  })),
  on(settingsAction.setCurrencyFormat, (state, { currency }) => ({
    ...state,
    currency,
  }))
);
