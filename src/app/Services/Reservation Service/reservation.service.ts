import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, retry, throwError ,of} from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ireservation } from '../../Models/ireservation';
import {  Idepartment } from '../../Models/idepartment';
import { StorageService } from '../Storage Service/storage.service';
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  httpOptions;

  constructor(private http: HttpClient , 
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

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // Check status code and perform actions
    // if (error.status === 404) {
    //   // Handle 404 Not Found error
    //   console.error(error.error)
    // } else if (error.status === 500) {
    //   // Handle 500 Internal Server Error
    //   console.error(error.error)
    // } else {
    //   // Handle other status codes
    // }

    // Throw the error to be caught by the subscriber
    return errorMessage;
  }

  newReservation(userId:string,placePriceId:number, firstName:string, lastName:string, ): Observable<any> {
    const requestBody = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      placePriceId: placePriceId
    };
    return this.http
      .post<any>(
        `${environment.APIURL}/api/Reservation/UserReservation`,
        JSON.stringify(requestBody),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${environment.AdminToken}`
          }),
        }
      )
      .pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          // console.error(error.error); // Log the error message
          console.error(error.error); // Log the error message
          return throwError(error); // Rethrow the error to be caught by the subscriber
        })
      );
  }

  fetchReservations(
    page: number,
    pageSize: number 
  ): Observable<any> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString(),
    };
    return this.http.get<any>(`${environment.APIURL}/api/Reservation/TodaysReservations`,
      {params: params, 
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
        Authorization: `Bearer ${this.storageService.getUser()}`
        }),
      }
    );
  }

  getReservationById(Id: string): Observable<Ireservation> {
    // userNationalId.toString;
    return this.http
      .get<Ireservation>(`${environment.APIURL}/api/Reservation/Get/${Id}`)
      .pipe(
        retry(2)
        // catchError(this.handleError)
      );
  }

  getAllDepartments(): Observable<any> {
    // console.log(`${environment.APIURL}/api/Department/All-Departments`);
    const response = this.http.get(
      `${environment.APIURL}/api/Department/All-Departments`
    );
    return response;
  }

  getPlaceReservation(placeId : number , placeType:string): Observable<any> {
    return this.http.get<any>(
      `${environment.APIURL}/api/Reservation/PlaceReservation/`,
      {
        params : {
          placeID : placeId ,
          placeType : placeType
        },
        headers : new HttpHeaders({
          'Content-Type': 'application/json' ,
        Authorization: `Bearer ${this.storageService.getUser()}`
        })
      }
    )

  }
}
