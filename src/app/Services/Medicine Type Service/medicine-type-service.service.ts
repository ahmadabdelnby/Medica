import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../Storage Service/storage.service';  // Storage Service
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AddMedicine } from '../../Models/add-medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineTypeServiceService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  getMedicineData(pageNumber?: number, pageSize?: number, searchQuery?: string): Observable<any> {
    if (searchQuery && pageNumber && pageSize) {
      return this.http.get(`${environment.APIURL}/api/MedicineType/paginated`, {
        params: {
          pageNumber: pageNumber.toString(),
          pageSize: pageSize.toString(),
          searchQuery: searchQuery
        },
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.storageService.getUser()}`
        })
      });
    }

    return this.http.get(`${environment.APIURL}/api/MedicineType/paginated`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageService.getUser()}`
      })
    });

  }

  getMedicineDataById(id: number): Observable<any> {
    return this.http.get(`${environment.APIURL}/api/MedicineType/Get/`, 
      {
        params : {
          id : id.toString()
        },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageService.getUser()}`
      })
    });
  }

  addMedicineType(medicine:AddMedicine): Observable<any> {
    return this.http.post<any>(`${environment.APIURL}/api/MedicineType/AddMedicine`, {
      medicine
    },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${environment.AdminToken}`
        })
      });
  }
}
