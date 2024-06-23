import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from '../Storage Service/storage.service';
import { AddUserDisease } from '../../Models/add-user-disease';

@Injectable({
  providedIn: 'root',
})
export class UserDiseaseServiceService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  addUserDisease(
    addUserData: AddUserDisease
  ): Observable<any> {
    return this.http.post<any>(
      `${environment.APIURL}/api/ApplicationUserDisease`,
      {
        params: {
          addUserData
        },
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.storageService.getUser()}`,
        }),
      }
    );
  }

  getAllDisease(): Observable<any> {
    return this.http.get<any>(
      `${environment.APIURL}/api/Disease`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.storageService.getUser()}`,
        }),
      }
    );

  }
}
