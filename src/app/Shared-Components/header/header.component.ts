import { Component, OnChanges, OnInit } from '@angular/core';
import { StorageService } from '../../Services/Storage Service/storage.service';
import { UserDataService } from '../../Services/User Data Service/user-data.service';
import { UserBasicData } from '../../Models/user-basic-data';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit , OnChanges {
  isLoggedIn : boolean = false;
  userData: UserBasicData ={
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: undefined,
    nid: '',
    bloodType: undefined,
    age: 0,
    report: undefined
  }

  constructor(
    private storageService: StorageService ,
    private userDataService: UserDataService ,
    private route: Router
  ) {  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  ngOnChanges(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.logout();        
  }

  logout(): void {
    this.storageService.logout();
    this.isLoggedIn = false;
    this.route.navigate(['/Home']);
  }
}
