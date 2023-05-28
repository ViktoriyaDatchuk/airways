import { ICartFlights } from '../models/models';

export interface CartState {
  cart: ICartFlights;
}

export const selectFeature = (state: CartState) => {
  return state.cart;
};
