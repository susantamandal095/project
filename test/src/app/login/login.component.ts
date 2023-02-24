import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WebserviceService } from '../shared/services/webservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isadmin : boolean = true;
  isemp : boolean = false;
  logindata: any = {
    "token": 'true',
  }
  // data_arrya : any =[];
  constructor(private route:Router,public webService: WebserviceService) { }

  ngOnInit(): void {
    // this.data_arrya = JSON.parse(localStorage.getItem("data"));
  
  // console.log(this.data_arrya);
  }
  log_arrya : any = []
  go(){
    if(this.username == '' || this.username == undefined){
      this.webService.makeFocusById('username')
     // alert("Enter valid Username !!")
      this.webService.openSnackBar("Enter valid Username !!");
      return
    }
    if(this.password == '' || this.password == undefined){
      this.webService.makeFocusById('password')
     // alert("Enter valid Password !!")
      this.webService.openSnackBar("Enter valid Password !!");
      return
    }
    // if(this.username == this.data_arrya.email)
    // {
    //  if(this.username == this.data_arrya.email && this.password == this.data_arrya.password)
    //  {
    //   alert("Login Successful !!")
  //  this.webService.openSnackBar("Login Successful !!");
    //   this.route.navigate(['/home']);
    //  }
    //  else{
    //   alert("Invalid Username or Password")
    //this.webService.openSnackBar("Invalid Username or Password");
    //   this.route.navigate(['/login']);
    //  }
    // }
    // else{
    //   alert("Username is not register pls sinup")
   // this.webService.openSnackBar("Username is not register pls sinup");
    //   this.route.navigate(['/login']);
    //  }
      // i will use for dyanimic below code ..............
      
this.webService.getRequest("/admin/get_admin_data").
subscribe(
  data => {
    this.log_arrya = data ? data : [];
    console.log(this.log_arrya)
    
for(let i of this.log_arrya)
{
  console.log(i.email)
  console.log(i.password)
    // if(this.username == i.email)
    // {
     if(this.username == i.email && this.password == i.password)
     {
      //alert("Login Successful !!")
      localStorage.setItem("data", JSON.stringify(this.logindata.token));
      this.webService.openSnackBar("Login Successful !!");
      this.route.navigate(['/home']);
     }
     else{
      //alert("Invalid Username or Password")
      this.webService.openSnackBar("Invalid Username or Password");
      this.route.navigate(['/login']);
     }
    }
  //   else{
  //     alert("Username is not register pls sinup")
 // this.webService.openSnackBar("Username is not register pls sinup");
  //     this.route.navigate(['/login']);
  //    }
  // }
  },error => {
  //  alert("Something went wrong!!")
  this.webService.openSnackBar("Something went wrong!!");
  }
);
  }
  emp_arrya : any = []
  goEmp(){
    if(this.username == '' || this.username == undefined){
      this.webService.makeFocusById('username')
     // alert("Enter valid Username !!")
      this.webService.openSnackBar("Enter valid Username !!");
      return
    }
    if(this.password == '' || this.password == undefined){
      this.webService.makeFocusById('passwordemp')
     // alert("Enter valid Password !!")
      this.webService.openSnackBar("Enter valid Password !!");
      return
    }
    // if(this.username == this.data_arrya.email)
    // {
    //  if(this.username == this.data_arrya.email && this.password == this.data_arrya.password)
    //  {
    //   alert("Login Successful !!")
  //  this.webService.openSnackBar("Login Successful !!");
    //   this.route.navigate(['/home']);
    //  }
    //  else{
    //   alert("Invalid Username or Password")
    //this.webService.openSnackBar("Invalid Username or Password");
    //   this.route.navigate(['/login']);
    //  }
    // }
    // else{
    //   alert("Username is not register pls sinup")
   // this.webService.openSnackBar("Username is not register pls sinup");
    //   this.route.navigate(['/login']);
    //  }
      // i will use for dyanimic below code ..............
      
this.webService.getRequest("/user/get_user").
subscribe(
  data => {
    this.emp_arrya = data ? data : [];
    console.log(this.emp_arrya)
    
for(let i of this.emp_arrya)
{
  console.log(i.email)
  console.log(i.password)
    // if(this.username == i.email)
    // {
     if(this.username == i.email && this.password == i.password)
     {
      //alert("Login Successful !!")
      localStorage.setItem("data", JSON.stringify(this.logindata.token));
      this.webService.openSnackBar("Login Successful !!");
      this.route.navigate(['/home']);
     }
     else{
      //alert("Invalid Username or Password")
      this.webService.openSnackBar("Invalid Username or Password");
      this.route.navigate(['/login']);
     }
    }
  //   else{
  //     alert("Username is not register pls sinup")
 // this.webService.openSnackBar("Username is not register pls sinup");
  //     this.route.navigate(['/login']);
  //    }
  // }
  },error => {
  //  alert("Something went wrong!!")
  this.webService.openSnackBar("Something went wrong!!");
  }
);
  }
  emp(){
    this.isadmin = false;
    this.isemp = true;
  }
  admin(){
    this.isadmin = true;
    this.isemp = false;
  }
}
