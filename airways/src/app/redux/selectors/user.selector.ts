import { IUserFlights } from '../models/models';

export interface UserState {
  user: IUserFlights;
}

export const selectFeature = (state: UserState) => {
  return state.user;
};
