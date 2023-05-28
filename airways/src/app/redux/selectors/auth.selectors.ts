import { createSelector } from '@ngrx/store';
import { IAuthStore, IDataTravel } from '../models/models';


export interface AppState {
  auth: IAuthStore;
}

export const selectFeature = (state: AppState) => {
    return state.auth
};

export const selectFrom = createSelector(
  selectFeature,
  (state: IAuthStore) => {
    return state.name},
);