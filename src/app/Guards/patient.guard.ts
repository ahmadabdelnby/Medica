import { CanActivateFn } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../Modules/authentication/login/login.component';

export const patientGuard: CanActivateFn = (route, state) => {
  const _snackBar = LoginComponent._SnackBar;
  const userRole = LoginComponent.userRole;
  if (userRole !== 'Patient') {
    if (_snackBar) {
      _snackBar.open('You are not authorized to view this page.', 'Close', { duration: 5000 });
    }
    return false;
  } else {
    return true;
  }
};
