import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SinupComponent } from './sinup/sinup.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AdminComponent } from './admin/admin.component';
import { ChartComponent } from './chart/chart.component';
import { CovidComponent } from './covid/covid.component';
import { CovidV2Component } from './covid-v2/covid-v2.component';
import { CovidepageComponent } from './covidepage/covidepage.component';
import { AuthguardGuard } from '../app/shared/authguard.guard'
import { BugsComponent } from './bugs/bugs.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path:'chart',
    component:HomeComponent,
    canActivate:[AuthguardGuard]
  },
  { 
    path:'companyname',
    component:NavComponent,
    canActivate:[AuthguardGuard]
  },
  { 
    path:'sinup',
    component:SinupComponent
  },
  { 
    path:'login',
    component:LoginComponent
  },
  { 
    path:'side',
    component:SideMenuComponent,
    canActivate:[AuthguardGuard]
  },
  {
     path:'admin',
     component:AdminComponent,
     canActivate:[AuthguardGuard]
  },
  { 
    path:'home',
    component:ChartComponent,
    canActivate:[AuthguardGuard]
  },
  { 
    path:'covid',
    component:CovidComponent,
    canActivate:[AuthguardGuard]
  },
  { 
    path:'covid-v2',
    component:CovidV2Component,
    canActivate:[AuthguardGuard]
  },
  { 
    path:'covidpage',
    component:CovidepageComponent,
    canActivate:[AuthguardGuard]
  },
  { 
    path:'bugs',
    component:BugsComponent,
    canActivate:[AuthguardGuard]
  },
  { 
    path:'product',
    component:ProductComponent,
    canActivate:[AuthguardGuard]
  },
  




  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
