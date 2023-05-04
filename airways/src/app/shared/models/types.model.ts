export interface AirportModel {
  id: number;
  code: string;
  title?: string;
  city: string;
}

export type AirportRequiredProps = Pick<AirportModel, 'code' | 'city'>;
