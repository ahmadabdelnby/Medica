import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstaidComponent } from './firstaid/firstaid.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    FirstaidComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoreModule { }
