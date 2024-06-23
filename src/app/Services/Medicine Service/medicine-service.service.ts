import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from '../Storage Service/storage.service';  // Storage Service

@Injectable({
  providedIn: 'root'
})
export class MedicineServiceService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  getMedicineList(pageNumber : number , pageSize : number , searchQuery? : string): Observable<any> {
    if(searchQuery){
      return this.http.get(`${environment.APIURL}/api/Medicine/paginated`, {
        params : {
          pageNumber : pageNumber.toString(),
          pageSize : pageSize.toString(),
          searchQuery : searchQuery
        },
        headers : new HttpHeaders({
          'Content-Type': 'application/json' ,
        Authorization: `Bearer ${this.storageService.getUser()}`
        })
      });
    }
    
    return this.http.get(`${environment.APIURL}/api/Medicine/paginated`, {
      params : {
        pageNumber : pageNumber.toString(),
        pageSize : pageSize.toString(),
      },
      headers : new HttpHeaders({
        'Content-Type': 'application/json' ,
      Authorization: `Bearer ${this.storageService.getUser()}`
      })
    });
  
  }   

  addNewMedicine(name :string) : Observable<any>{
    return this.http.post(`${environment.APIURL}/api/Medicine/Post`,{
      name
    },
    {
      headers : new HttpHeaders({
        'Content-Type': 'application/json' ,
        Authorization: `Bearer ${environment.AdminToken}`
      })
    });
  }
    
}
