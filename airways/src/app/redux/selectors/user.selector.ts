import { IUserFlights } from '../models/models';

export interface UserState {
  user: IUserFlights;
}

export const selectUserFeature = (state: UserState) => {
  return state.user;
};
