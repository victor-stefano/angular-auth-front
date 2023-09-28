import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing
import { AdminRoutingModule } from './admin-routing.module';

//Pages
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
