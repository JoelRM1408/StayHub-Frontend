import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from '../../../shared/models/servicio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl = 'http://localhost:8080/apiservicio';

  constructor(private http: HttpClient) {}
  getAllServiciosByIdAloj(id: number): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.apiUrl}/listarxaloj/${id}`);
  }
  getAllCategorias(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.apiUrl}/listar`);
  }
}
