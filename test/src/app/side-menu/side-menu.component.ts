import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {
  WebserviceService
} from '../shared/services/webservice.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isOpened: boolean = true;
  isclosed: boolean = false;
  country_name: string = "";
  storeMenudata: any = [];
  companyLogo: any = "";
  collapsed = true;
  companyname : string;
  constructor(
    private router: Router,public webService: WebserviceService
  ) {}
  ngOnInit() {
    // this.companyname = 'Susanta Demo for test'
    this.webService.companyname.subscribe(s =>{
      this.companyname = s;
    });
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mySidenav").style.display = "block";
    this.isOpened = false;
    this.isclosed = true;
    let elem: any = (<HTMLElement>document.querySelector('.sublist-ul.active'));
    if (elem) {
      elem.style.display = 'block'
    }
  }

  closeNav() {
    let w = window.innerWidth;
    // let dynamicWidth = w < 768 ? 0: 60;
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("mySidenav").style.display = "none";
    this.isOpened = true;
    this.isclosed = false;
    let elem: any = (<HTMLElement>document.querySelector('.sublist-ul.active'));
    if (elem) {
      elem.style.display = 'none'
    }
  }
  // validURL(str) {
  //   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  //     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  //     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  //     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  //   return !!pattern.test(str);
  // }

  goHome() {
     window.location.href = '/home';
  }
  isMenuIconOpened: boolean = false;
  openMenuNav() {
    document.getElementById("menuNav").style.width = "150px";
    this.isMenuIconOpened = true;
  }

  closeMenuNav() {
    document.getElementById("menuNav").style.width = "0";
    this.isMenuIconOpened = false;
  }
  logout(){
    if (confirm('Do you want to logout !!')) {
    localStorage.clear()
   // alert("Logout Successful !!")
   this.webService.openSnackBar("Logout Successful !!");
    this.router.navigate(['/login']);
    }
  }
}
