import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from '../Storage Service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LabServiceService {

  constructor(
    private http: HttpClient ,
    private storageService: StorageService
  ) { }

  getAllLabs(): Observable<any> {
    const response = this.http.get
    (
      `${environment.APIURL}/api/Lab`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
          'Authorization': `Bearer ${this.storageService.getUser()}`
        })
      }
    )
    return response;
  }
}
