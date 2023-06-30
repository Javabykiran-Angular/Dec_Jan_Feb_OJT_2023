import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddempComponent } from '../addemp/addemp.component';
import { DetailsComponent } from '../details/details.component';
import { FilterPipe } from '../filter.pipe';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { UpdateemployeeComponent } from '../updateemployee/updateemployee.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DetailsComponent,
    AddempComponent,
    UpdateemployeeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule,    
    NgxPaginationModule,
    
  ]
})
export class DashboardModule { }
