import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Ireservation } from '../../../Models/ireservation';
// import { Idepartment } from '../../../Models/idepartment';
// import { ReservationService } from '../../../Services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationService } from '../../../Services/Reservation Service/reservation.service';
import { Router } from '@angular/router';
import { Idepartment } from '../../../Models/idepartment';
import { error } from 'console';
import { Clinics } from '../../../Models/clinics';
import { ClinicServiceService } from '../../../Services/Clinic Service/clinic-service.service';
import { Labs } from '../../../Models/labs';
import { LabServiceService } from '../../../Services/Lab Service/lab-service.service';
import { PlacePrice } from '../../../Models/place-price';
import { PlacePriceServiceService } from '../../../Services/place-price-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent implements OnInit , OnChanges {
  labOrClinic: string = '';
  departments: Idepartment[] = [];
  clinics : Clinics[] = [];
  labs : Labs[] = [];
  placePrices : PlacePrice[] = [];  
  selectedPlacePrice: any;
  reservation: Ireservation = {
    // username: '',
    // nationalId: '',
    // clinicOrLab: '',
    specialty: '',
    placePriceId: 0,
    patientId: '',
    firstName: '',
    lastName: '',
    // clinicOrLab: '',
  };
  specialties: string[] = [];
  constructor(
    private reservationservice: ReservationService,
    private _snackbar: MatSnackBar,
    private router: Router,
    private clinicService: ClinicServiceService,
    private labService: LabServiceService,
    private placePriceService: PlacePriceServiceService
  ) {}
  ngOnInit(): void {
    this.reservationservice.getAllDepartments().subscribe(response => {
      this.departments = response.data.map((data: any) => ({
        id: data.id,
        name: data.name,
        hospitalID: data.hospitalID,
      }));
      // console.log('Departments: ', this.departments);
    });

    this.clinicService.getAllClinics().subscribe(response => {
      this.clinics = response.data.map((data: any) => ({
        id: data.id,
        name: data.name,
        departmentID: data.departmentID,
        department: data.department,
        placePrices: data.placePrices,
        placeShifts: data.placeShifts,
        placeEquipment: data.placeEquipment,
        reservations: data.reservations,
      }));
      // console.log('Clinics: ', this.clinics);
    });

    this.labService.getAllLabs().subscribe(response => {
      this.labs = response.data.map((data: any) => ({
        id: data.id,
        name: data.name,
        type: data.type,
        hospitalID: data.hospitalID,
        hospital: data.hospital,
        testLabs: data.testLabs,
        placePrices: data.placePrices,
        placeShifts: data.placeShifts,
        placeEquipments: data.placeEquipments,
        reservations: data.reservations,
      }));
      // console.log('Labs: ', this.labs);
    });
    
  }

  ngOnChanges(changes : any): void {
     // Check if the changes object has the properties you're interested in
  if (changes['placeType'] && changes['event']) {
    // Extract the current values
    const placeType = changes['placeType'].currentValue;
    const event = changes['event'].currentValue;

    // Call the getAllPlacePrices method
    this.getAllPlacePrices(placeType, event);
  }    
}


  saveReservation(): void {
    const observer = {
      next: (usrReservation: Ireservation) => {
        this._snackbar.open('Reservation Added Successfully', 'Done', {
          duration: 5000,
        }),
          this.router.navigateByUrl('/WaitingList');
      },
      error: (err: Error) => {
        console.log(err.message);
        this._snackbar.open('Reservation Field', 'Done', {
          duration: 5000,
        });
      },
    };
console.log(this.reservation);
    this.reservationservice
      .newReservation(this.reservation)
      .subscribe(observer);
  }

  getAllPlacePrices(placeType : string , event :Event ): void {
    const target = event.target as HTMLSelectElement;
    const value = target ? target.value : '';
    const placeId = parseInt(value);
    this.placePriceService.getAllPlacePrices(placeType , placeId).subscribe(response => {
      this.placePrices = response.data.map((data: any) => ({
        id: data.id,
        name: data.name,
        price: data.price,
        placeID: data.placeID,
        placeType: data.placeType,
      }));
      this.selectedPlacePrice = this.placePrices.find(placePrice => placePrice.id === placeId.toString());
      // console.log('Place Prices: ', this.placePrices);
    });
  }
}
