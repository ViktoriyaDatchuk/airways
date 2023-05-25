import { createSelector } from '@ngrx/store';
import { ISettings } from '../models/models';

export interface SettingsState {
  settings: ISettings;
}

export const selectFeature = (state: SettingsState) => {
  return state.settings;
};

export const selectDate = createSelector(selectFeature, (state: ISettings) => {
  return state.date;
});

export const selectCurrency = createSelector(
  selectFeature,
  (state: ISettings) => {
    return state.currency;
  }
);
