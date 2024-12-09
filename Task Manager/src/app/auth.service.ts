import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login(email: string, password: string): void {
    if (email && password) {
      localStorage.setItem('currentUser', JSON.stringify({ email }));
    }
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'));
  }

}
