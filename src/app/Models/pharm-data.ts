export interface PharmData {
    id: number
    name: string
    hospitalID: number
    hospital: {
        id: number
        name: string
        phone: string
        government: string
        city: string
        country: string
        type: string
    }
}
