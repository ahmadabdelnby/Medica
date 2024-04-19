import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../Services/reservation.service';

@Component({
  selector: 'app-clinic-waiting-list',
  templateUrl: './clinic-waiting-list.component.html',
  styleUrl: './clinic-waiting-list.component.css'
})
export class ClinicWaitingListComponent implements OnInit{
  constructor(private reservationService:ReservationService ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.reservationService.fetchReservations(1,10).subscribe(
      data => {
        console.log(data.data);
      }
    );
  }

}
