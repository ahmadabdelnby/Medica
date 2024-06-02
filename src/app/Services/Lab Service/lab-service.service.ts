import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllLabs(): Observable<any> {
    const response = this.http.get
    (
      `${environment.APIURL}/api/Lab`
    )
    return response;
  }
}
