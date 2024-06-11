export interface Ireservation {

  // clinicOrLab: string; // 'clinic' or 'lab'
  placePriceId: number; 
  patientId : string;
  firstName : string;
  lastName : string;
  specialty?: string; // Only required if clinic is selected
 
}
