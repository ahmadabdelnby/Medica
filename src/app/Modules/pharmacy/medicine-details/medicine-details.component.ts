import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { MedicineServiceService } from '../../../Services/Medicine Service/medicine-service.service';
import { MedicineData } from '../../../Models/medicine-data';
import { Medicine } from '../../../Models/medicine';
import { MedicineTypeServiceService } from '../../../Services/Medicine Type Service/medicine-type-service.service';
import { response } from 'express';
import { MedData } from '../../../Models/med-data';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrl: './medicine-details.component.css',
})
export class MedicineDetailsComponent implements OnInit{
  // medicine : MedData = {
  //   id: 0,
  //   medicineID: 0,
  //   typeID: 0,
  //   description: '',
  //   sideEffects: '',
  //   warning: '',
  //   expirationDate: '',
  //   medicine: undefined,
  //   types: undefined,
  //   pharmacyMedicines: undefined
  // };
  constructor(
    // private router: Router,
    // private activatedRoute: ActivatedRoute,
    // private medicineService: MedicineServiceService,
    // private medicineTypeService: MedicineTypeServiceService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.activatedRoute.params.subscribe(params => {
    //   const id = params['id'];
    //   this.medicineTypeService.getMedicineDataById(id).subscribe(data => {
    //     this.medicine = data.data;
    //     console.log('Medicine: ', data.data);
    //   });
    // });
  }


}
