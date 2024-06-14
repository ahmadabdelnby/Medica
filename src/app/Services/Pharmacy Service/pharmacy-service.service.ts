import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pharmacies } from '../../Models/pharmacies';
import { StorageService } from '../Storage Service/storage.service';  // Storage Service

@Injectable({
  providedIn: 'root'
})
export class PharmacyServiceService {

  constructor(private http: HttpClient ,
    private storageService: StorageService
  ) { }

  getPharmById(pharmId : string): Observable<Pharmacies> {
    return this.http.get<Pharmacies>(`${environment.APIURL}api/Clinic/GetAllClinics/${pharmId}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
          'Authorization': `Bearer ${this.storageService.getUser()}`
          }),
      }
    ).
    pipe(
      retry(2),
    )

  }

}
