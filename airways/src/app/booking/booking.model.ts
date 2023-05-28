import {
  IFlightModelWithoutOtherFlights,
  IOtherFlights,
} from '../shared/models/types.model';

export type ISliderData = [
  keyof IOtherFlights | '0',
  IFlightModelWithoutOtherFlights | INoFlightModel
];

// type INoFlightModel = Pick<IFlightModelWithoutOtherFlights, 'price' | 'takeoffDate'>

export interface INoFlightModel {
  takeoffDate: string;
}

export interface IPassenger {
  name: string;
  hasBaggage: boolean;
  seat?: string;
  type: AGEGROUP;
}

export enum FROMTOSTRINGS {
  from = 'from',
  to = 'to',
}

export enum AGEGROUP {
  Adult = 'adult',
  Child = 'child',
  Infant = 'infant',
}

export interface ITariff {
  type: AGEGROUP;
  str: string;
  coefficient: number;
  fare: number;
}

export const tariffs: ITariff[] = [
  {
    type: AGEGROUP.Adult,
    str: 'Adult',
    coefficient: 1,
    fare: 0.65,
  },
  {
    type: AGEGROUP.Child,
    str: 'Child',
    coefficient: 0.76,
    fare: 0.54,
  },
  {
    type: AGEGROUP.Infant,
    str: 'Infant',
    coefficient: 0.38,
    fare: 0.9,
  },
];

export interface IPassengerFare {
  type: AGEGROUP;
  count: number;
}

export interface IPriceData {
  str: string;
  count: number;
  price: number;
  tax: number;
  fare: number;
  cur: string;
}

export interface ITicketInfoSummary {
  flightNumber: string;
  nameFrom: string;
  nameTo: string;
  takeoffDate: Date;
  gmtFrom: string;
  landingDate: Date;
  gmtTo: string;
  passengers: IPassenger[];
}
