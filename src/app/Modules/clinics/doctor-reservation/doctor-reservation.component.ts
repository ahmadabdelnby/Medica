import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-reservation',
  templateUrl: './doctor-reservation.component.html',
  styleUrls: ['./doctor-reservation.component.css']
})
export class DoctorReservationComponent {

  constructor(private router: Router) { }

  removeRow(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const row = target.closest('tr');
    if (row) {
      row.remove(); // Remove the row from the DOM if it exists
    }
  }

}
