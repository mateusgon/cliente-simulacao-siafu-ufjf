
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }
  private isAuthenticated: boolean = false;

  canActivate() {
    if (this.tokenStorage.getToken()) {
      this.isAuthenticated = true;
      return this.isAuthenticated;
    }
    else
    {
      this.router.navigate(['/simulacoes']);
      return false;
    }
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}