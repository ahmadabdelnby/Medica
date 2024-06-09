import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, pipe, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlacePriceServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPlacePrices(placeType : string , placeId :number): Observable<any> {
    const response = this.http.get
    (
      `${environment.APIURL}/api/PlacePrice/All-Place-Prices?placeType=${placeType}&placeId=${placeId}`
    )
    return response;
  }
}
