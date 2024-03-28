import { Time } from "@angular/common";

export interface Ireservation {
    username: string;
    nationalId: string;
    clinicOrLab: string; // 'clinic' or 'lab'
    specialty?: string; // Only required if clinic is selected 
}
