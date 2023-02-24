import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WebserviceService } from '../shared/services/webservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  collapsed = true;
  companyname : string;
  constructor(private route:Router,public webService: WebserviceService) { }

  ngOnInit(): void {
    this.webService.companyname.subscribe(s =>{
      this.companyname = s;
    });
  }
  noChange(comp){
    console.log(comp.value)
    this.webService.companyname.next(comp.value)
  }
}
