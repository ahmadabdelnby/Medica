export interface ClinicData {
    id: number
  name: string
  departmentID: number
  description: string
  reservationCount: number
  departmentName: string
  price: number
  photoID: number
  photo: string
  workdays: string[]
  shifts: Shift[]
}

export interface Shift {
    id: number
    name: string
    startTime: string
    endTime: string
  }
