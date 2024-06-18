import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../../Services/Reservation Service/reservation.service';
import { Ireservation } from '../../../Models/ireservation';
import { log } from 'console';
import { ReservationData } from '../../../Models/reservation-data';
import { response } from 'express';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.css',
})
export class WaitingListComponent implements OnInit {
  reservations: ReservationData[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages : number = 0;
  

  constructor(
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.fetchReservations();
    // console.log(this.fetchReservations());
    this.reservationService.fetchReservations(this.currentPage, this.pageSize).subscribe(response => {
      this.reservations = response.data.map((data: any) => ({
        id: data.id,
        Time : data.time,
        serialNumber: data.serialNumber,
        state: data.state,
        placePriceId: data.placePriceId,
        userID: data.userID,
        placePrice: data.placePrice,
        user: data.user,
      }));
      console.log('Reservations: ', this.reservations);
    });
  }

  removeRow(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const row = target.closest('tr');
    if (row) {
      row.remove();
    }
  }

  fetchReservations(): void {
    this.reservationService
      .fetchReservations(
        this.currentPage,
        this.pageSize
      )
      .subscribe(response => {
        this.reservations = response.data.map((data: any) => ({
          id: data.id,
          reservationTime: data.reservationTime,
          reservationStatus: data.state,
          placePrice: data.placePriceId,
          patientId: data.userID,
          // console.log('Reservations: ', this.reservations);
        }
      ));
      console.log('Reservations: ', this.reservations);
      });
  }
  onNextPage(): void {
    this.currentPage++;
    this.fetchReservations();
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchReservations();
    }
  }
}
