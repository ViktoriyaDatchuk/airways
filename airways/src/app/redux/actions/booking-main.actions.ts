import { createAction, props } from '@ngrx/store';
import { IDataTravel } from '../models/models';
import { ISliderData } from 'src/app/booking/booking.model';
import { IFlightModelWithoutOtherFlights } from 'src/app/shared/models/types.model';




export const setAdultsCount = createAction('[BOOKIN_PAGE] SET ADULTS COUNT', (adults: number) => ({adults}));
export const setChildsCount = createAction('[BOOKIN_PAGE] SET CHILDS COUNT', (childs: number) => ({childs}));
export const setInfantsCount = createAction('[BOOKIN_PAGE] SET INFANTS COUNT', (infants: number) => ({infants}));
export const setTypeTrip = createAction('[BOOKIN_PAGE] SET TYPE TRIP', (isRoundTrip: boolean) => ({isRoundTrip}));
export const setDataTravel = createAction('[BOOKIN_PAGE] SET DATA TRAVEL', props<{ booking: IDataTravel }>());
export const setDataTravelFrom = createAction('[BOOKIN_PAGE] SET DATA TRAVEL FROM', props<{ from: ISliderData[] }>());
export const setDataTravelTo = createAction('[BOOKIN_PAGE] SET DATA TRAVEL TO', props<{ to: ISliderData[] }>());
export const setTicketFrom = createAction('[BOOKIN_PAGE] SET TICKET FROM', props<{ ticketFrom: IFlightModelWithoutOtherFlights }>());
export const setTicketTo = createAction('[BOOKIN_PAGE] SET TICKET TO', props<{ ticketTo: IFlightModelWithoutOtherFlights }>());
export const setIsLoadingFlight = createAction('[BOOKIN_PAGE] SET LOADING DATA', (loading: boolean) => ({loading}));