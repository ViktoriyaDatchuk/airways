import { IFlightModelWithoutOtherFlights, IOtherFlights } from "../shared/models/types.model";

export type ISliderData = [keyof IOtherFlights | '0', IFlightModelWithoutOtherFlights | INoFlightModel]

// type INoFlightModel = Pick<IFlightModelWithoutOtherFlights, 'price' | 'takeoffDate'>

export interface INoFlightModel {
    takeoffDate: string;
}

export enum FROMTOSTRINGS {
    from = 'from',
    to = 'to',
}