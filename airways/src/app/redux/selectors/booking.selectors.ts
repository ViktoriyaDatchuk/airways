import { createSelector } from '@ngrx/store';
import { IDataTravel } from '../models/models';


export interface AppState {
  booking: IDataTravel;
}

export const selectFeature = (state: AppState) => {
    return state.booking
};

export const selectFrom = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.from},
);