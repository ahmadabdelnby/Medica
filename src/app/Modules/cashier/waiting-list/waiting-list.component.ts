import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.css'
})
export class WaitingListComponent implements OnInit{
  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToClinicWaitingList(){
    this.router.navigate(['/ClinicWaitingList'])
  }

  goToLabWaitingList(){
    this.router.navigate(['/LabWAitingList'])
  }

}
