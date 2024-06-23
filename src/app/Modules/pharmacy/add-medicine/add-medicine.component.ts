import { Component, OnInit } from '@angular/core';
import { PharmacyServiceService } from '../../../Services/Pharmacy Service/pharmacy-service.service';
import { PharmData } from '../../../Models/pharm-data';
import { MedicineTypeServiceService } from '../../../Services/Medicine Type Service/medicine-type-service.service';
import { response } from 'express';
import { Medicine } from '../../../Models/medicine';
import { TypeServiceService } from '../../../Services/Type Service/type-service.service';
import { TypeData } from '../../../Models/type-data';
import { MedicineServiceService } from '../../../Services/Medicine Service/medicine-service.service';
import { MedicineData } from '../../../Models/medicine-data';
import { AddMedicine } from '../../../Models/add-medicine';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css',
})
export class AddMedicineComponent implements OnInit{
  // addMedicineForm!: FormGroup;
  pageNumbers: number = 1;
  pageSize: number = 200;
  searchQuery: string = '';
  pharmacies : PharmData[] = [];
  medicineArray: Medicine[] = [];
  typesArray: TypeData[] = [];
  medicineList: MedicineData[] = [];
  medicine: AddMedicine = {
    medicineID: 0,
    typeID: 0,
    description: '',
    sideEffects: '',
    warning: '',
    expireDate: '',
    medicineName: '',
    typeName: ''
  }


  constructor(
    private pharmacyService: PharmacyServiceService,
    private medicineTypeService: MedicineTypeServiceService,
    private typeService: TypeServiceService,
    private medicineService: MedicineServiceService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
    
  ) {}
  ngOnInit(): void {
    this.getPharmacies(this.pageNumbers, this.pageSize, this.searchQuery);
    this.loadInitialMedicineData(
      this.pageNumbers,
      this.pageSize,
      this.searchQuery
    );
    this.getAllTypes(this.pageNumbers, this.pageSize, this.searchQuery);
    this.getAllMedicines(this.pageNumbers, this.pageSize, this.searchQuery);
  }
  
  getPharmacies(
    pageNumber: number = 1,
    pageSize: number = 200,
    searchQuery?: string
  ) {
    const observer = {
      next : (response : any) =>{
        this.pharmacies= response.data.map((data:any)=> ({
          id : data.id,
          name:data.name,
          hospitalId: data.hospitalId,
          hId : data.hospital.id,
          hName: data.hospital.name,
          hPhone: data.hospital.phone,
          hgovernment : data.hospital.government,
          hCity : data.hospital.city,
          hCountry : data.hospital.country,
          hType : data.hospital.type,
        }))
        console.log('Pharmacies Array ', this.pharmacies)
      },
      error : (error:any)=>{
        console.log(error)
      }
    }
    this.pharmacyService.getAllPharmacies(pageNumber, pageSize, searchQuery).subscribe(observer)
  }

  loadInitialMedicineData(
    pageNumber: number,
    pageSize: number,
    searchQuery: string
  ) {
    pageNumber = this.pageNumbers;
    pageSize = this.pageSize;
    searchQuery = this.searchQuery;
    const observer = {
      next: (response: any) => {
        this.medicineArray = response.data.map((data: any) => ({
          id: data.id,
          medicineID: data.medicineID,
          typeID: data.typeID,
          description: data.description,
          sideEffects: data.sideEffects,
          warning: data.warning,
          expirationDate: data.expirationDate,
          medicine: {
            id: data.medicine.id,
            name: data.medicine.name,
          },
          types: {
            id: data.types.id,
            name: data.types.name,
          },
        }));
        console.log('Medicine Array ', this.medicineArray);
      },
      error: (error: any) => {
        console.log(error);
      },
    };

    this.medicineTypeService
      .getMedicineData(pageNumber, pageSize, searchQuery)
      .subscribe(observer);
    // console.log("medicine Array " , response.data)
  }

  getAllTypes(pageNumber: number,
    pageSize: number,
    searchQuery?: string){
      pageNumber = this.pageNumbers;
      pageSize = this.pageSize;
      searchQuery = this.searchQuery;
      const observer = {
        next : (response : any) =>{
          this.typesArray = response.data.map((data:any)=> ({
            id : data.id,
            name:data.name,
          }))
          console.log('Types Array ', this.typesArray)
        },
        error : (error:any)=>{
          console.log(error)
        }
      }
      this.typeService.getAllTypes(pageNumber, pageSize, searchQuery).subscribe(observer)
    }

    getAllMedicines(pageNumber: number,pagesize: number, searchQuery?: string){
      pageNumber = this.pageNumbers;
      pagesize = this.pageSize;
      searchQuery = this.searchQuery;
      const observer = {
        next : (response : any) =>{
          this.medicineList = response.data.map((data:any)=> ({
            id : data.id,
            name:data.name,
          }))
          console.log('Medicine List Array ', this.medicineList)
        },
        error : (error:any)=>{
          console.log(error)
        }
      }
      this.medicineService.getMedicineList(pageNumber, pagesize, searchQuery).subscribe(observer)
    }

    addMedicine(name: string){
      const observer = {
        next : (response : any) =>{
          console.log('Medicine Added ', response)
          this._snackBar.open('Medicine Added Successfully', 'Close', {
            duration: 5000,
          })
        },
        error : (error:any)=>{
          const errorMessage = error.error.message || 'An error occurred';
          console.log(errorMessage)
          this._snackBar.open(errorMessage, 'Close', {
            duration: 5000,
          });
        }
      }
      this.medicineService.addNewMedicine(name).subscribe(observer)
    }

    addMedicineType(){
      const observer = {
        next : (response : any) =>{
          console.log('Medicine Added ', response)
          this._snackBar.open('Medicine Added Successfully', 'Close', {
            duration: 10000,
          })
        },
        error : (error:any)=>{
          const errorMessage = error.error.message || 'An error occurred';
          console.log(errorMessage)
          this._snackBar.open(errorMessage, 'Close', {
            duration: 5000,
          });
        }
      }
      console.log(this.medicine)
      this.medicineTypeService
      .addMedicineType(this.medicine)
      .subscribe(observer)

    }



}
