import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MedicineComponent,
    MedicineDetailsComponent,
    AddMedicineComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // Add this line
  ],
  exports: [
    MedicineComponent,
    MedicineDetailsComponent,
    AddMedicineComponent,
  ],
})
export class PharmacyModule {}
