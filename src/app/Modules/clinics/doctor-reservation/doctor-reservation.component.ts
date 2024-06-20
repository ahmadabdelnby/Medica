import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ClinicServiceService } from '../../../Services/Clinic Service/clinic-service.service';
import { ClinicData } from '../../../Models/clinic-data';

@Component({
  selector: 'app-doctor-reservation',
  templateUrl: './doctor-reservation.component.html',
  styleUrls: ['./doctor-reservation.component.css'],
})
export class DoctorReservationComponent implements OnInit{
  clinicData : ClinicData = {
    id: 0,
    name: '',
    departmentID: 0,
    description: '',
    reservationCount: 0,
    departmentName: '',
    price: 0,
    photoID: 0,
    photo: '',
    workdays: [],
    shifts: []
  };

  constructor(private router: Router ,
    private activatedRoute: ActivatedRoute ,
    private clinicService: ClinicServiceService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.activatedRoute.params.subscribe(params => {
      // console.log('Params: ', params);
      const id = params['id'];
      this.clinicService.getClinic(id).subscribe(data => {
        this.clinicData = data.data;
        console.log('Clinic: ', data.data);
      });
    });
  }

  removeRow(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const row = target.closest('tr');
    if (row) {
      row.remove();
    }
  }
}
