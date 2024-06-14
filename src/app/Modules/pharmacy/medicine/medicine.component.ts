import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class MedicineComponent implements OnInit {
  medicineRows = [
    { id: 1, name: 'said' },
    { id: 2, name: 'lol' },
    { id: 3, name: 'ahmed' },
    { id: 4, name: 'ahssan' },
    { id: 5, name: 'sdamklm' },
    { id: 6, name: 'tmam' },
    { id: 7, name: 'okok' },
    { id: 8, name: 'mohamed' },
    { id: 9, name: 'mostafa' },
    { id: 10, name: 'ziad' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToAddMedicinePage() {
    this.router.navigate(['/addmedicine']);
  }

  removeRow(id: number) {
    this.medicineRows = this.medicineRows.filter(row => row.id !== id);
  }

  filterTable() {
    const searchInput = (document.getElementById('searchBar') as HTMLInputElement).value.toLowerCase();
    const table = document.getElementById('medicineTable');

    if (table) {
      const rows = table.getElementsByTagName('tr');
      Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName('td');
        let match = false;
        Array.from(cells).forEach(cell => {
          if (cell.innerText.toLowerCase().includes(searchInput)) {
            match = true;
          }
        });
        if (match) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  }
}
