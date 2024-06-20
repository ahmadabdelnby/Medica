import { Component, OnInit } from '@angular/core';
import { ClinicServiceService } from '../../../Services/Clinic Service/clinic-service.service';
import { Clinics } from '../../../Models/clinics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliniclogin',
  templateUrl: './cliniclogin.component.html',
  styleUrl: './cliniclogin.component.css',
})
export class ClinicloginComponent implements OnInit{
  clinics : Clinics[] = [];

  constructor(
    private clinicService: ClinicServiceService ,
    private router: Router
  ) {}
  ngOnInit(): void {
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
      console.log('Clinics: ', this.clinics);
    });
  }

  goToClinicDetails(id: number) {
    this.router.navigate(['/doctorreservation', id]);
    console.log('Clinic ID: ', id);
  }
  
}
