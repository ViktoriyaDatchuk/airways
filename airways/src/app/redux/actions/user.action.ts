import { createAction, props } from '@ngrx/store';
import { IFligthForCart } from 'src/app/shared/models/types.model';

export const addPaidFlight = createAction(
  '[USER] ADD FLIGHT',
  props<{ fligth: IFligthForCart }>()
);
