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

export const selectTravelFrom = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.travelFrom},
);

export const selectTravelTo = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.travelTo},
);

export const selectTicketFrom = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.ticketFrom},
);

export const selectTicketTo = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.ticketTo},
);

export const selectFlightIsLoading = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.isLoadingFlight},
);