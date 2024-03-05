import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cashier-system',
  templateUrl: './cashier-system.component.html',
  styleUrl: './cashier-system.component.css'
})
export class CashierSystemComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToReservation(){
    this.router.navigate(['/Reservation'])
  }

  goToWaitingList(){
    this.router.navigate(['/WaitingList'])
  }

}
