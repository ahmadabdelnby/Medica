import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../../Services/Reservation Service/reservation.service';
import { Ireservation } from '../../../Models/ireservation';
import { log } from 'console';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.css'
})
export class WaitingListComponent implements OnInit {
  reservations: any[] = [];
  currentPage: number = 1;
  pageSize: number = 20;
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedSpecialty: string = '';
  patientName : string = '' ;
  patientNID : string = '';
  clinicName : string = '';
  queueNumber : string ='';


  constructor(private router: Router,
    private reservationService: ReservationService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.fetchReservations();
    // console.log(this.fetchReservations());
    
  }

  fetchReservations(): void {
    this.reservationService.fetchReservations(
      this.currentPage,
      this.pageSize,
      // this.searchQuery,
      // this.selectedCategory,
      // this.selectedSpecialty
    ).subscribe(reservations => {
      this.reservations = reservations;

    });
  }

  applyFiltersAndSearch(): void {
    // Apply filters and search query
    this.reservations = this.reservations.filter(reservation =>
      reservation.category === this.selectedCategory &&
      (this.selectedCategory !== 'clinic' || reservation.specialty === this.selectedSpecialty) &&
      (reservation.patientName.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
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

  onSearch(): void {
    this.fetchReservations();
  }

  onCategoryChange(): void {
    this.fetchReservations();
  }

  onSpecialtyChange(): void {
    this.fetchReservations();
  }

  goToClinicWaitingList(){
    this.router.navigate(['/ClinicWaitingList'])
  }

  goToLabWaitingList(){
    this.router.navigate(['/LabWAitingList'])
  }
}

  


