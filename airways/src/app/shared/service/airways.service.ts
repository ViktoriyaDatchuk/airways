import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirportModel, AirportRequiredProps } from '../models/types.model';

const BASE_URL = 'http://localhost:3000/airports';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<AirportModel[]>(BASE_URL);
  }

  load(id: string) {
    return this.http.get<AirportModel>(`${BASE_URL}/${id}`);
  }

  update(id: string, updates: AirportRequiredProps) {
    return this.http.patch<AirportModel>(
      `${BASE_URL}/${id}`,
      JSON.stringify(updates),
      HEADER
    );
  }

  delete(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
