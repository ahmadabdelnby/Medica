import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../Services/reservation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lab-waiting-list',
  templateUrl: './lab-waiting-list.component.html',
  styleUrl: './lab-waiting-list.component.css'
})
export class LabWaitingListComponent implements OnInit {

  constructor(private reservationService:ReservationService ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.reservationService.fetchReservations(1,10).subscribe(
      data => {
        console.log(data.data);
      }
    );
  }
  
  removeRow(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const row = target.closest('tr');
    if (row) {
      row.remove(); 
    }
  }

}


