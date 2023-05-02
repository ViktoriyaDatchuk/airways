import { createAction, props } from '@ngrx/store';
import { IDataTravel } from '../models/models';




export const setDataTravel = createAction('[BOOKIN_PAGE] SET DATA TRAVEL', props<{ booking: IDataTravel }>());