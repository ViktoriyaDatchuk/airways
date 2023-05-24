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

export const selectAdultsCount = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.adults},
);

export const selectChildsCount = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.childs},
);

export const selectInfantsCount = createSelector(
  selectFeature,
  (state: IDataTravel) => {
    return state.infants},
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