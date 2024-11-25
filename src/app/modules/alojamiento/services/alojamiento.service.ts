import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alojamiento } from '../../../shared/models/alojamiento.model';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  private apiUrl = 'http://localhost:8080/apialojamiento';

  constructor(private http: HttpClient) {}

  getAllAlojamientos(): Observable<Alojamiento[]> {
    return this.http.get<Alojamiento[]>(`${this.apiUrl}/listar`);
  }

  getAlojamientoById(id: number): Observable<Alojamiento> {
    return this.http.get<Alojamiento>(`${this.apiUrl}/buscar/${id}`);
  }

  getAlojamientosForGuest(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllGuest`);
  }
}
