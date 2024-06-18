import { Component , OnInit } from '@angular/core';
import { LabServiceService } from '../../../Services/Lab Service/lab-service.service';
import { Router } from '@angular/router';
import { LabData } from '../../../Models/lab-data';
import { Labs } from '../../../Models/labs';

@Component({
  selector: 'app-all-labs',
  templateUrl: './all-labs.component.html',
  styleUrl: './all-labs.component.css'
})
export class AllLabsComponent implements OnInit{
  labs : Labs[] = [];

  constructor(private labService: LabServiceService , 
    private router: Router
  ) {}
  ngOnInit(): void {
    this.labService.getAllLabs().subscribe(response => {
      this.labs = response.data.map((data: any) => ({
        id: data.id,
        name: data.name,
        type: data.type,
        hospitalID: data.hospitalID,
        hospital: data.hospital,
        testLabs: data.testLabs,
        placePrices: data.placePrices,
        placeShifts: data.placeShifts,
        placeEquipments: data.placeEquipments,
        reservations: data.reservations,
      }));
      console.log('Labs: ', this.labs);
    });  
  }

  goToLabDetails(id: number) {
    this.router.navigate(['/labreservation', id]);
    console.log('Lab ID: ', id);
  }

}
