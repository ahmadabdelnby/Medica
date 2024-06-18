import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from '../Storage Service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LabServiceService {
  httpOptions ;

  constructor(
    private http: HttpClient ,
    private storageService: StorageService
  ) { 
    this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZG1pbiIsImp0aSI6ImY3YzQ5ZjA1LTczN2QtNDI4NC05OGNkLTg3ZmEwMzViNzQyYyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwidWlkIjoiMTIzMTIzMTIzMTIzMTIiLCJyb2xlcyI6WyJVc2VyIiwiQWRtaW4iXSwiZXhwIjoxNzIwNDQ0MjQ0fQ.ki9Qbh6h8jMXVgUDeFNq8s8w6Oxpr6Xissl9UpDYyOA'
        }
      )
    }
  }

  getAllLabs(): Observable<any> {
    const response = this.http.get
    (
      `${environment.APIURL}/api/Lab`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
          Authorization: `Bearer ${this.storageService.getUser()}`
        })
      }
    )
    return response;
  }

  getLab(id: number): Observable<any> {
    const response = this.http.get
    (
      `${environment.APIURL}/api/Lab/Get/${id}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
          Authorization: `Bearer ${this.storageService.getUser()}`
        })
      }
    )
    return response;
  }
}
