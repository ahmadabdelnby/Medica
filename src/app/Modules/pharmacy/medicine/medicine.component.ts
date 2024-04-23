import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class MedicineComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const removeButtons = document.querySelectorAll('.btn-danger');

    removeButtons.forEach(button => {
      button.addEventListener('click', event => {
        const row = (event.target as HTMLElement).closest('tr'); // Find the nearest ancestor <tr> element to the clicked button
        if (row) {
          row.remove(); // Remove the row from the DOM if it exists
        }
      });
    });
  }

  goToAddMedicinePage() {
    this.router.navigate(['/addmedicine']);
  }
}
