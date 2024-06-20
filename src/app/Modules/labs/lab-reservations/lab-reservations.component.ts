import { Component , OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LabServiceService } from '../../../Services/Lab Service/lab-service.service';
import { LabData } from '../../../Models/lab-data';
import { ReservationService } from '../../../Services/Reservation Service/reservation.service';
import { PlaceReservationData } from '../../../Models/place-reservation-data';
import { response } from 'express';

@Component({
  selector: 'app-lab-reservations',
  templateUrl: './lab-reservations.component.html',
  styleUrl: './lab-reservations.component.css'
})
export class LabReservationsComponent implements OnInit {
  placeType :string = 'lab';
  placeReservations : PlaceReservationData[] =[]
  lab : LabData = {
    id: 0,
    name: '',
    type: '',
    hospitalID: 0,
    hospital: undefined,
    testLabs: undefined,
    placePrices: undefined,
    placeShifts: undefined,
    placeEquipments: undefined,
    reservations: undefined
  }
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private labService: LabServiceService ,
    private reservationService :ReservationService
  )
  {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.activatedRoute.params.subscribe(params => {
      // console.log('Params: ', params);
      const id = params['id'];
      this.labService.getLab(id).subscribe(data => {
        this.lab = data.data;
        console.log('Lab: ', data.data);
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

}
