export interface PharmMedicine {
    id: number
    pharmacyID: number
    medicineTypeID: number
    amount: number
    price: number
    pharmacy: {
        id: number
        name: string
        hospitalID: number
        hospital:  {
            id: number
            name: string
            phone: string
            government: string
            city: string
            country: string
            type: string
          }
      }
    medicineType: {
        id: number
        medicineID: number
        typeID: number
        description: string
        sideEffects: string
        warning: string
        expirationDate: string
        medicine: {
            id: number
            name: string
          }
        types: {
            id: number
            name: string
          }
      }
    
  }