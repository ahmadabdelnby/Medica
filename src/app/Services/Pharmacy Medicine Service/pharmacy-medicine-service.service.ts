import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../Storage Service/storage.service';  // Storage Service
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyMedicineServiceService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  getAllPharmacyMedicines(pageNumber: number, pageSize: number, searchQuery?: string): Observable<any> {
    if (searchQuery && pageNumber && pageSize) {
      return this.http.get(`${environment.APIURL}/api/PharmacyMedicine/paginated`, {
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

    return this.http.get(`${environment.APIURL}/api/PharmacyMedicine/paginated`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageService.getUser()}`
      })
    });

  }

  // addPharmacyMedicine(pharmacyId: number, medicineId: number, quantity: number , price:number): Observable<any> {

}
