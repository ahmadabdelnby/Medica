import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Clinics } from '../../Models/clinics';
import { StorageService } from '../Storage Service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicServiceService {

  constructor(private http: HttpClient ,
    private storageService: StorageService
  ) { }

  getAllClinics(): Observable<any> {
   const response = this.http.get
   (
    `${environment.APIURL}/api/Clinic/All-Clinics`
    ,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
        'Authorization': `Bearer ${this.storageService.getUser()}`
      })
    }
   )
   return response;
  }

  

  

}
