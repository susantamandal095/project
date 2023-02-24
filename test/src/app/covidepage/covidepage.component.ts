import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-covidepage',
  templateUrl: './covidepage.component.html',
  styleUrls: ['./covidepage.component.scss']
})
export class CovidepageComponent implements OnInit {
  isTrue: boolean = false;
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
    
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  massFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
 
  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName)
    {
    (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
    }
    }
    }
  
    slides = [{'image': '../../assets/c1.png'}, {'image': '../../assets/c2.png'},{'image': '../../assets/c3.jpg'}];
    theme(){
      this.isTrue=false;
    }
    themeone(){
      this.isTrue=true;
    }
}
