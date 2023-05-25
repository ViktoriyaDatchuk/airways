import { createAction, props } from '@ngrx/store';

export const setDateFormat = createAction(
  '[SETTINGS] SET DATE FORMAT',
  props<{ date: string }>()
);
export const setCurrencyFormat = createAction(
  '[SETTINGS] SET CURRENCY FORMAT',
  props<{ currency: string }>()
);
