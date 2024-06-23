import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ClinicServiceService } from '../../../Services/Clinic Service/clinic-service.service';
import { ClinicData } from '../../../Models/clinic-data';
import { ReservationService } from '../../../Services/Reservation Service/reservation.service';
import { PlaceReservationData } from '../../../Models/place-reservation-data';
import { response } from 'express';

@Component({
  selector: 'app-doctor-reservation',
  templateUrl: './doctor-reservation.component.html',
  styleUrls: ['./doctor-reservation.component.css'],
})
export class DoctorReservationComponent implements OnInit{
  placeType: string = 'clinic';
  placeReservations: PlaceReservationData[] = [];
  clinicData : ClinicData = {
    id: 0,
    name: '',
    departmentID: 0,
    description: '',
    reservationCount: 0,
    departmentName: '',
    price: 0,
    photoID: 0,
    photo: '',
    workdays: [],
    shifts: []
  };

  constructor(private router: Router ,
    private activatedRoute: ActivatedRoute ,
    private clinicService: ClinicServiceService ,
    private reservationService : ReservationService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log('Params: ', params);
      const id = params['id'];
      this.clinicService.getClinic(id).subscribe(data => {
        this.clinicData = data.data;
        console.log('Clinic: ', data.data);
      });
    });

    this.activatedRoute.params.subscribe(params =>{
      const placeId = params['id'];
      const placeType = this.placeType;

      this.reservationService.getPlaceReservation(placeId , placeType).subscribe(response => {
        this.placeReservations = response.data.map((data:any)=>({
          firstname : data.firstname ,
          lastname : data.lastname ,
          nid : data.nid ,
          birthDate : data.birthDate,
          serialNumber : data.serialNumber
        }));
        console.log('place Reservations' , this.placeReservations)
      })
    })
  }

  removeRow(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const row = target.closest('tr');
    if (row) {
      row.remove();
    }
  }

  goToPatientDetails(id: string) {
    this.router.navigate(['/urprofile', id]);
    console.log('Patient ID: ', id);
  }
}
