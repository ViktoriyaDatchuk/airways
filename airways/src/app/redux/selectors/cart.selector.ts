import { IFlightModel } from 'src/app/shared/models/types.model';

export interface CartState {
  cart: IFlightModel[];
}

export const selectFeature = (state: CartState) => {
  return state.cart;
};
