import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pharmacies } from '../../Models/pharmacies';

@Injectable({
  providedIn: 'root'
})
export class PharmacyServiceService {

  constructor(private http: HttpClient) { }

  getPharmById(pharmId : string): Observable<Pharmacies> {
    return this.http.get<Pharmacies>(`${environment.APIURL}api/Clinic/GetAllClinics/${pharmId}`).
    pipe(
      retry(2),
    )

  }

}
