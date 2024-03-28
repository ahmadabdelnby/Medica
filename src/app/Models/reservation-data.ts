import { Time } from "@angular/common";
import { User } from "./user";

export interface ReservationData {
    id : string ;
    time : Time ;
    serialNumber : number ;
    state : boolean ;
    placePriceId : number ;
    userId : number ;
    user  : User ;
}
