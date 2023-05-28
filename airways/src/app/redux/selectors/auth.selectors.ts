import { createSelector } from '@ngrx/store';
import { IAuthStore, IDataTravel } from '../models/models';


export interface AppState {
  auth: IAuthStore;
}

export const selectFeature = (state: AppState) => {
    return state.auth
};

export const selectIsAuth = createSelector(
  selectFeature,
  (state: IAuthStore) => {
    return state.isAuth},
);

export const selectIsAuthWindowOpen = createSelector(
  selectFeature,
  (state: IAuthStore) => {
    return state.isAuthWindowOpen},
);

export const selectFirstName = createSelector(
  selectFeature,
  (state: IAuthStore) => {
    return state.name},
);