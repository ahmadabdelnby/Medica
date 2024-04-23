import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

@NgModule({
  declarations: [
    MedicineComponent,
    MedicineDetailsComponent,
    AddMedicineComponent,
  ],
  imports: [CommonModule],
})
export class PharmacyModule {}
