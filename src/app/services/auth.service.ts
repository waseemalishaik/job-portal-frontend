import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  

  constructor() {}

  login(user: any) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Store user info
      this.isLoggedInSubject.next(true);
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false);
  }

  private checkLoginStatus(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
