import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { UserRole } from '../Models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userRole = this.authService.getUserRole();

    if (!userRole) {
      this.router.navigate(['/Home']);
      this._snackBar;
      return false;
    }

    // Check if user role has required permissions for the route
    const requiredRoles = route.data['roles'] as UserRole[];
    if (requiredRoles && !requiredRoles.includes(userRole)) {
      this.router.navigate(['/Home']);
      return false;
    }

    return true;
  }
}
