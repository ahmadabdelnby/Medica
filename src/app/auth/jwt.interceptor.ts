import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../Services/Auth Service/authentication.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    public auth: AuthenticationService,
    private _snackBar: MatSnackBar
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._snackBar.open('Unauthorized', 'Close', {});
            }
          }
        }
      )
    );
  }
}
