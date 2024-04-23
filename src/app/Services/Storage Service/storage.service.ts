import { Injectable } from '@angular/core';

export const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    document.cookie = `${USER_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  public saveUser(user: any): void {
    if (typeof document === 'undefined') {
      return;
    }
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `${USER_KEY}=${JSON.stringify(
      user
    )}; expires=${expirationDate.toUTCString()}; path=/;secure=true;`;
  }
  public getUser(): any {
    if (typeof document === 'undefined') {
      return {};
    }
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${USER_KEY}=`)) {
        const user = cookie.substring(`${USER_KEY}=`.length, cookie.length);
        return JSON.parse(user);
      }
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${USER_KEY}=`)) {
        return true;
      }
    }

    return false;
  }
}
