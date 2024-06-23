export interface Medicine {
    id: number;
    medicineID: number;
    typeID: number;
    description: string;
    sideEffects: string;
    warning: string;
    expirationDate: string;
    medicine: {
      id: number;
      name: string;
    };
    types: {
      id: number;
      name: string;
    };
  }
  
 