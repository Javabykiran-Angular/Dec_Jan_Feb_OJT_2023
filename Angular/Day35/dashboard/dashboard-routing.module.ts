import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from '../addemp/addemp.component';
import { AuthGuard } from '../auth.guard';
import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:"details/:id",component:DetailsComponent,canActivate:[AuthGuard]
  },
  {
      path:"addemp",component:AddempComponent,canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
