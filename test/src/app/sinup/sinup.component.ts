import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { WebserviceService } from '../shared/services/webservice.service';
@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.scss']
})
export class SinupComponent implements OnInit {
  isTrue: boolean = false;
  sinup_data: any = {
  "s_name": '',
  "l_name": '',
  "email": '',
  "mobile": '',
  "password": '',
  "c_password": '',
  "add_one": '',
  "add_two": '',
  "city": '',
  "state": '',
  "pin": '',
  "pass" :'',
  "cpass":'',
  "passmsg":'',
  }
  constructor(private route:Router,public webService: WebserviceService) { }

  ngOnInit(): void {
    
  }

  //////// parsonal /////////////////////
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  //massFormControl = new FormControl('', [
   // Validators.required,
   // 
  //]);
  phoneFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);
  panFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);
  cnpasswordFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  pinFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  stateFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  addtwoFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  addoneFormControl = new FormControl('', [
    Validators.required,
    
  ]);
 
  hqFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  spFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  cgpaFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  fileFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  fileoneFormControl = new FormControl('', [
    Validators.required,
    
  ]);

  compFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  degFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  dojFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  doeFormControl = new FormControl('', [
    Validators.required,
    
  ]);

 ctcFormControl = new FormControl('', [
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
    
 sinup()
 {
  if(this.sinup_data.s_name == '' || this.sinup_data.s_name == undefined){
    this.webService.makeFocusById('s_name')
   // alert("Enter valid First name in Personal Information!!")
   this.webService.openSnackBar("Enter valid First name in Personal Information!!");
    return
  }
  if(this.sinup_data.l_name == '' || this.sinup_data.l_name == undefined){
    this.webService.makeFocusById('l_name')
  //  alert("Enter valid Last name in Personal Information!!")
  this.webService.openSnackBar("Enter valid Last name in Personal Information!!");
    return
  }
  if(this.sinup_data.email == '' || this.sinup_data.email == undefined){
    this.webService.makeFocusById('email')
  //  alert("Enter valid Email in Personal Information!!")
  this.webService.openSnackBar("Enter valid Email in Personal Information!!");
    return
  }
  if(this.sinup_data.mobile == '' || this.sinup_data.mobile == undefined){
    this.webService.makeFocusById('mobile')
  //  alert("Enter valid Mobile in Personal Information!!")
  this.webService.openSnackBar("Enter valid Mobile in Personal Information!!");
    return
  }
  if(this.sinup_data.password == '' || this.sinup_data.password == undefined){
    this.webService.makeFocusById('password')
  //  alert("Enter valid Password in Personal Information!!")
  this.webService.openSnackBar("Enter valid Password in Personal Information!!");
    return
  }
  if(this.sinup_data.c_password == '' || this.sinup_data.c_password == undefined){
    this.webService.makeFocusById('c_password')
 //   alert("Enter valid Confirm Password in Personal Information!!")
 this.webService.openSnackBar("Enter valid Confirm Password in Personal Information!!");
    return
  }
  if(this.sinup_data.add_one == '' || this.sinup_data.add_one == undefined){
    this.webService.makeFocusById('add_one')
   // alert("Enter valid Address 1 in Address!!")
   this.webService.openSnackBar("Enter valid Address 1 in Address!!");
    return
  }
  if(this.sinup_data.add_two == '' || this.sinup_data.add_two == undefined){
    this.webService.makeFocusById('add_two')
  //  alert("Enter valid Address 2 in Address!!")
  this.webService.openSnackBar("Enter valid Address 2 in Address!!");
    return
  }
  if(this.sinup_data.city == '' || this.sinup_data.city == undefined){
    this.webService.makeFocusById('city')
 //   alert("Enter valid City in Address!!")
 this.webService.openSnackBar("Enter valid City in Address!!");
    return
  }
  if(this.sinup_data.state == '' || this.sinup_data.state == undefined){
    this.webService.makeFocusById('state')
  //  alert("Enter valid State in Address!!")
  this.webService.openSnackBar("Enter valid State in Address!!");
    return
  }
  if(this.sinup_data.pin == '' || this.sinup_data.pin == undefined){
    this.webService.makeFocusById('pin')
 //   alert("Enter valid Pin in Address!!")
 this.webService.openSnackBar("Enter valid Pin in Address!!");
    return
  }
  // localStorage.setItem("data", JSON.stringify(this.sinup_data));

  
  // Sir this is use as a static purpous 
  // if(this.sinup_data.s_name != '' && this.sinup_data.s_name != undefined && this.sinup_data.l_name != '' && this.sinup_data.l_name != undefined && this.sinup_data.email != '' && this.sinup_data.email != undefined && this.sinup_data.mobile != '' && this.sinup_data.mobile != undefined && this.sinup_data.password != '' && this.sinup_data.password != undefined && this.sinup_data.c_password != '' && this.sinup_data.c_password != undefined && this.sinup_data.add_one != '' && this.sinup_data.add_one != undefined && this.sinup_data.add_two != '' && this.sinup_data.add_two != undefined && this.sinup_data.city != '' && this.sinup_data.city != undefined && this.sinup_data.state != '' && this.sinup_data.state != undefined && this.sinup_data.pin != '' && this.sinup_data.pin != undefined){
  //   alert("Data Added Success!!")
  // }
// Sir i will use for dyanimic below code ..............
let requestData = {
  "s_name": this.sinup_data.s_name ? this.sinup_data.s_name : '',
  "l_name": this.sinup_data.l_name ? this.sinup_data.l_name : '',
  "email": this.sinup_data.email ? this.sinup_data.email : '',
  "mobile": this.sinup_data.mobile ? this.sinup_data.mobile : '',
  "password": this.sinup_data.password ? this.sinup_data.password : '',
  "add_one": this.sinup_data.add_one ? this.sinup_data.add_one : '',
  "add_two": this.sinup_data.add_two ? this.sinup_data.add_two : '',
  "city": this.sinup_data.city ? this.sinup_data.city : '',
  "state": this.sinup_data.state ? this.sinup_data.state : '',
  "pin": this.sinup_data.pin ? this.sinup_data.pin : '',
  "profile_pic": this.pro_file ?  this.pro_file : 'https://www.w3schools.com/howto/img_avatar.png',
}
this.webService.postRequest("/user/save_user_data", requestData).
subscribe(
  data => {
     // alert(data.message);
     this.webService.openSnackBar(data.message);
      this.route.navigate(['/login']);
  },error => {
   // alert("Something went wrong!!");
   this.webService.openSnackBar("Something went wrong!!");
    this.route.navigate(['/login']);
  }
);
 }   
login()
    {
      this.route.navigate(['/login']);
     }
checkpass(event)
 {
      this.sinup_data.pass = event;
 }
checkcpass(event)
 {
      this.sinup_data.cpass = event;
      this.sinup_data.passmsg ="";
      if(this.sinup_data.pass != this.sinup_data.cpass){
         this.sinup_data.passmsg = "Password and Confirm Password are not same !!!"
      }
}
reset()
{
      this.sinup_data.s_name = '',
       this.sinup_data.l_name = '',
       this.sinup_data.email = '',
       this.sinup_data.mobile = '',
       this.sinup_data.password = '',
       this.sinup_data.c_password = '',
       this.sinup_data.add_one = '',
       this.sinup_data.add_two = '',
       this.sinup_data.city = '',
       this.sinup_data.state = '',
       this.sinup_data.pin = ''
}
url : any = '';
pro_file : any ='';
  onSelectFile(event) {
    // console.log(event)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      // console.log(event)
      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(event)
        this.url = event.target.result;
        // console.log(this.url);
      }
      this.pro_file = event.target.files[0].name
    }
  }
}
