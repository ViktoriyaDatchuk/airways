import { createAction, props } from '@ngrx/store';
import { IFlightModel } from 'src/app/shared/models/types.model';

export const addFlight = createAction(
  '[CARD] ADD FLIGHT',
  props<{ fligth: IFlightModel }>()
);
