import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';//button
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { WebserviceService } from './shared/services/webservice.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from'ng2-charts';
import { SinupComponent } from './sinup/sinup.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { ChartComponent } from './chart/chart.component';
import { CovidepageComponent } from './covidepage/covidepage.component';
// import { NgxChartsModule }from '@swimlane/ngx-charts';
import { CovidComponent } from './covid/covid.component';
import { CovidV2Component } from './covid-v2/covid-v2.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BugsComponent } from './bugs/bugs.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    SinupComponent,
    SideMenuComponent,
    AdminComponent,
    ChartComponent,
    CovidepageComponent,
    CovidComponent,
    CovidV2Component,
    BugsComponent,
    ProductComponent
   
    
 
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCarouselModule.forRoot(),
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTooltipModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ChartsModule,
    MatAutocompleteModule,
    // NgxChartsModule,
    MatProgressBarModule
    
    
    
    

],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
exports: [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatTabsModule,
  MatRadioModule,
  MatTableModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSelectModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatPaginatorModule,
  NgxPaginationModule,
  MatAutocompleteModule,
  // NgxChartsModule,
  MatProgressBarModule
 
  
  
],
  providers: [WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
