export interface IDataTravel {
  selected: boolean;
  number: string;
  type: string;
  from: string;
  destination: string;
  dateFrom: string;
  dateTo: string;
  dateFromBack?: string;
  dateToBack?: string;
  adults: number;
  childs: number;
  infants: number;
  price: number;
}

export const trips: IDataTravel[] = [
  // {
  //   selected: false,
  //   number: 'FR 1925',
  //   type: 'Round Trip',
  //   from: 'Dublin',
  //   destination: 'Warsaw',
  //   dateFrom: '1 Mar, 2023, 8:40',
  //   dateTo: '1 Mar, 2023, 12:00',
  //   dateFromBack: '18 Mar, 2023, 7:40',
  //   dateToBack: '18 Mar, 2023, 11:00',
  //   adults: 1,
  //   childs: 1,
  //   infants: 1,
  //   price: 551.38,
  // },
  // {
  //   selected: false,
  //   number: 'FR 1936',
  //   type: 'One way',
  //   from: 'Gdansk',
  //   destination: 'Warsaw',
  //   dateFrom: '28 May, 2023, 15:40',
  //   dateTo: '28 May, 2023, 16:40',
  //   adults: 1,
  //   childs: 0,
  //   infants: 0,
  //   price: 20.96,
  // },
];
