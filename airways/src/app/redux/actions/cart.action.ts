import { createAction, props } from '@ngrx/store';
import { IFligthForCart } from 'src/app/shared/models/types.model';

export const addFlight = createAction(
  '[CARD] ADD FLIGHT',
  props<{ fligth: IFligthForCart }>()
);

export const changeSelected = createAction(
  '[CARD] CHANGE SELECTED',
  props<{ selected: boolean; trip: IFligthForCart }>()
);

export const deleteFligth = createAction(
  '[CARD] DELETE FLIGHT',
  props<{ number: string }>()
);
