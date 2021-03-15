import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public logout(): void {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  public saveToken(token: string, rememberMe: boolean): void {
    return rememberMe ? this.setLocalToken(token) : this.setSessionToken(token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY) === null
      ? window.sessionStorage.getItem(TOKEN_KEY)
      : window.localStorage.getItem(TOKEN_KEY);
  }

  private setSessionToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  private setLocalToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }
}
