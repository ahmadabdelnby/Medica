import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from '../Storage Service/storage.service';
import { UserBasicData } from '../../Models/user-basic-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  

  constructor(
    private http: HttpClient ,
    private storageService: StorageService
  ) { }

  getUserBasicData(): Observable<any> {
    return this.http.get<any>(`${environment.APIURL}/api/ApplicationUser/BasicData` , 
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
        'Authorization': `Bearer ${this.storageService.getUser()}`
        }),
      }
    );
  }

  GetAllDiseaseOfUser(): Observable<any> {
    return this.http.get<any>(`${environment.APIURL}/api/ApplicationUser/GetAllDiseaseOfUser` , 
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
        Authorization: `Bearer ${this.storageService.getUser()}`,
        
        }),
      }
    );
  }
}
