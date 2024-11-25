import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { AuthResponse } from '../../../shared/models/AuthResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/apiuser';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const body = { email, password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, body, { headers });
  }

  register(user: User): Observable<User> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${this.apiUrl}/registrar`, user, { headers });
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : null;
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  setGuestMode(): void {
    localStorage.setItem('isGuest', 'true');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  }

  isGuestMode(): boolean {
    return localStorage.getItem('isGuest') === 'true';
  }

  clearSession(): void {
    localStorage.removeItem('isGuest');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  }
}
