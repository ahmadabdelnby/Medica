import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../Storage Service/storage.service';  // Storage Service
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  getAllTypes(pageNumber: number= 1, pageSize: number =50, searchQuery?: string): Observable<any> {
    if (searchQuery && pageNumber && pageSize) {
      return this.http.get(`${environment.APIURL}/api/Type/paginated`, {
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

    return this.http.get(`${environment.APIURL}/api/Type/paginated`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageService.getUser()}`
      })
    });

  }
}
