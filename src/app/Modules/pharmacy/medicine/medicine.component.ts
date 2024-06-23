import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineServiceService } from '../../../Services/Medicine Service/medicine-service.service';
import { MedicineData } from '../../../Models/medicine-data';
import { Medicine } from '../../../Models/medicine';
import { MedicineTypeServiceService } from '../../../Services/Medicine Type Service/medicine-type-service.service';
import { response } from 'express';
import { PharmacyMedicineServiceService } from '../../../Services/Pharmacy Medicine Service/pharmacy-medicine-service.service';
import { PharmMedicine } from '../../../Models/pharm-medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class MedicineComponent implements OnInit {
  medicines: MedicineData[] = [];
  medicineArray: Medicine[] = [];
  medicineList: PharmMedicine[] = [];

  pageNumber: number = 1;
  pageSize: number = 500;
  searchQuery: string = '';
  medicineRows = [
    { id: 1, name: 'pandol' },
    { id: 2, name: 'oplex' },
    { id: 3, name: 'otrivin' },
    { id: 4, name: 'Augmanteen' },
    { id: 5, name: 'Asprin' },
    { id: 6, name: 'Rivo' },
    { id: 7, name: 'Sebralex' },
    { id: 8, name: 'Congestal' },
    { id: 9, name: 'Catafast' },
  ];

  MedicineArray = [
    { id: 1, name: 'Medicine A', description: 'Description A', sideEffects: 'Side Effect A', expirationDate: '2023-12-31' , quantity: 10},
    { id: 2, name: 'Medicine B', description: 'Description B', sideEffects: 'Side Effect B', expirationDate: '2024-06-30' , quantity: 10},
    { id: 3, name: 'Medicine C', description: 'Description C', sideEffects: 'Side Effect C', expirationDate: '2023-12-31', quantity: 10 },
    { id: 4, name: 'Medicine D', description: 'Description D', sideEffects: 'Side Effect D', expirationDate: '2024-06-30' , quantity: 10},
    { id: 5, name: 'Medicine E', description: 'Description E', sideEffects: 'Side Effect E', expirationDate: '2023-12-31' , quantity: 10},
    { id: 6, name: 'Medicine F', description: 'Description F', sideEffects: 'Side Effect F', expirationDate: '2024-06-30', quantity: 10 },
    { id: 7, name: 'Medicine G', description: 'Description G', sideEffects: 'Side Effect G', expirationDate: '2023-12-31' , quantity: 10},
    { id: 8, name: 'Medicine H', description: 'Description H', sideEffects: 'Side Effect H', expirationDate: '2024-06-30' , quantity: 10},
    { id: 9, name: 'Medicine I', description: 'Description I', sideEffects: 'Side Effect I', expirationDate: '2023-12-31' , quantity: 10},
    { id: 10, name: 'Medicine J', description: 'Description J', sideEffects: 'Side Effect J', expirationDate: '2024-06-30' , quantity: 10},
    { id: 11, name: 'Medicine K', description: 'Description K', sideEffects: 'Side Effect K', expirationDate: '2023-12-31' , quantity: 10},
    { id: 12, name: 'Medicine L', description: 'Description L', sideEffects: 'Side Effect L', expirationDate: '2024-06-30' , quantity: 10},
    // Add more medicines as needed
  ];

  removeRow(id: number) {
    this.MedicineArray = this.MedicineArray.filter(medicine => medicine.id !== id);
  }

  decreaseQuantity(id: number) {
    const medicine = this.MedicineArray.find(m => m.id === id);
    if (medicine && medicine.quantity > 0) {
      medicine.quantity -= 1;
    }
  }
  
  increaseQuantity(id: number) {
    const medicine = this.MedicineArray.find(m => m.id === id);
    if (medicine) {
      medicine.quantity += 1;
    }
  }

  

  constructor(
    private router: Router,
    private medicineService: MedicineServiceService,
    private medicineTypeService: MedicineTypeServiceService,
    private pharmacyMedicineService: PharmacyMedicineServiceService
  ) {}

  ngOnInit() {
    this.medicineService
      .getMedicineList(this.pageNumber, this.pageSize, this.searchQuery)
      .subscribe(response => {
        this.medicines = response.data.map((data: any) => ({
          id: data.id,
          name: data.name,
        }));
      });

    this.loadInitialMedicineData(
      this.pageNumber,
      this.pageSize,
      this.searchQuery
    );

    this.GetAllPharmacyMedicines(
      this.pageNumber,
      this.pageSize,
      this.searchQuery
    );
    
  }

  // loadInitialMedicineData(this.pageNumber, this.pageSize, this.searchQuery) {
  loadInitialMedicineData(
    pageNumber: number,
    pageSize: number,
    searchQuery: string
  ) {
    pageNumber = this.pageNumber;
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

  GetAllPharmacyMedicines(
    pageNumber: number,
    pageSize: number,
    searchQuery: string
  ) {
    pageNumber = this.pageNumber;
    pageSize = this.pageSize;
    searchQuery = this.searchQuery;
    this.pharmacyMedicineService
      .getAllPharmacyMedicines(this.pageNumber, this.pageSize, this.searchQuery)
      .subscribe(response => {
        this.medicineList = response.data.map((data: any) => ({
          id: data.id,
          pharmacyId : data.pharmacyId,
          medicineTypeId : data.medicineTypeId,
          amount : data.amount,
          price : data.price,
          pharmacy: {
            id: data.pharmacy.id,
            name: data.pharmacy.name,
            hospitalID: data.pharmacy.hospitalID,
            hospital: {
              id: data.pharmacy.hospital.id,
              name: data.pharmacy.hospital.name,
              phone: data.pharmacy.hospital.phone,
              government: data.pharmacy.hospital.government,
              city: data.pharmacy.hospital.city,
              country: data.pharmacy.hospital.country,
              type: data.pharmacy.hospital.type,
            },
          },
          medicineType: {
            id: data.medicineType.id,
            medicineID: data.medicineType.medicineID,
            typeID: data.medicineType.typeID,
            description: data.medicineType.description,
            sideEffects: data.medicineType.sideEffects,
            warning: data.medicineType.warning,
            expirationDate: data.medicineType.expirationDate,
            medicine: {
              id: data.medicineType.medicine.id,
              name: data.medicineType.medicine.name,
            },
            types: {
              id: data.medicineType.types.id,
              name: data.medicineType.types.name,
            },
          },
        }
      )
    );
        console.log('Medicine List ', this.medicineList);
      });
  }

  GetAllPharmacyMedicinesc(
    pageNumber: number,
    pageSize: number,
    searchQuery: string
  ){
    pageNumber = this.pageNumber;
    pageSize = this.pageSize;
    searchQuery = this.searchQuery;
    const observer = {
      next: (response: any) => {
        this.medicineList = response.data.map((data: any) => ({
          id: data.id,
          pharmacyId : data.pharmacyId,
          medicineTypeId : data.medicineTypeId,
          amount : data.amount,
          price : data.price,
          pharmacy: {
            id: data.pharmacy.id,
            name: data.pharmacy.name,
            hospitalID: data.pharmacy.hospitalID,
            hospital: {
              id: data.pharmacy.hospital.id,
              name: data.pharmacy.hospital.name,
              phone: data.pharmacy.hospital.phone,
              government: data.pharmacy.hospital.government,
              city: data.pharmacy.hospital.city,
              country: data.pharmacy.hospital.country,
              type: data.pharmacy.hospital.type,
            },
          },
          medicineType: {
            id: data.medicineType.id,
            medicineID: data.medicineType.medicineID,
            typeID: data.medicineType.typeID,
            description: data.medicineType.description,
            sideEffects: data.medicineType.sideEffects,
            warning: data.medicineType.warning,
            expirationDate: data.medicineType.expirationDate,
            medicine: {
              id: data.medicineType.medicine.id,
              name: data.medicineType.medicine.name,
            },
            types: {
              id: data.medicineType.types.id,
              name: data.medicineType.types.name,
            },
          },
        }));
        console.log('Medicine List ', this.medicineList);
      },
      error: (error: any) => {
        console.log(error);
      },
    };
  }

  goToMedicineDetails(id: number) {
    this.router.navigate(['/medicinedetails', id]);
  }

  goToAddMedicinePage() {
    this.router.navigate(['/addmedicine']);
  }

  // removeRow(id: number) {
  //   this.medicineRows = this.medicineRows.filter(row => row.id !== id);
  // }

  filterTable() {
    const searchInput = (
      document.getElementById('searchBar') as HTMLInputElement
    ).value.toLowerCase();
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
