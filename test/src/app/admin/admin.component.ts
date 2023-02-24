import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  WebserviceService
} from '../shared/services/webservice.service';
import { ExcelServicesService } from '../shared/services/excel-services.service';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loading: boolean;
  isTrue: boolean = false;
  profile: any = [];
  // route: any;
  value: any;
  sinup_data: any = {
    "id": '',
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
    
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 6, 9, 12];
  total: any;
  titles = 'excel-upload-download';  
  excel=[];
  constructor(private route: Router, public webService: WebserviceService,private excelService:ExcelServicesService,private http: HttpClient) {
    this.getJSON().subscribe(data => {  
      data.forEach(row => {  
        this.excel.push(row);  
      });  
     });
  }
  ngOnInit(): void {
    this.value = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    this.fetchingdata();
    // this.getdata();
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
isUpdate:boolean = false;
isView:boolean=false;
forCreate:boolean =false;
title:any='';
addupdate(data,mode){
  if(mode=='view')
  {
    this.title = "View"
    this.isView=true;
    this.isUpdate=false;
  }
  else
  {
    this.title = "Update"
    this.isView=false;
    this.isUpdate=true;
  }  
  this.forCreate = false;
    this.sinup_data.id = data._id;
    this.sinup_data.s_name = data.s_name ? data.s_name : '';
    this.sinup_data.l_name = data.l_name ? data.l_name :'';
    this.sinup_data.email = data.email ? data.email :'';
    this.sinup_data.mobile = data.mobile ? data.mobile : '';
    this.sinup_data.password = data.password ? data.password :'';
    this.sinup_data.add_one = data.add_one ? data.add_one :'';
    this.sinup_data.add_two = data.add_two ? data.add_two :'';
    this.sinup_data.city = data.city ? data.city :'';
    this.sinup_data.state = data.state ? data.state :'';
    this.sinup_data.pin = data.pin ? data.pin :'';
    
}
  update(event) {
 //   console.log(event)
    // alert("Update Successful !!")
    // this.value = new Date().toLocaleTimeString([], {
    //   hour: '2-digit',
    //   minute: '2-digit'
    // });
      if(this.sinup_data.s_name == '' || this.sinup_data.s_name == undefined){
        this.webService.makeFocusById('s_name')
      //  alert("Enter valid First name in Personal Information!!")
      this.webService.openSnackBar("Enter valid First name in Personal Information!!");
        return
      }
      if(this.sinup_data.l_name == '' || this.sinup_data.l_name == undefined){
        this.webService.makeFocusById('l_name')
        // alert("Enter valid Last name in Personal Information!!")
        this.webService.openSnackBar("Enter valid Last name in Personal Information!!");
        return
      }
      if(this.sinup_data.email == '' || this.sinup_data.email == undefined){
        this.webService.makeFocusById('email')
       // alert("Enter valid Email in Personal Information!!")
       this.webService.openSnackBar("Enter valid Email in Personal Information!!");
        return
      }
      if(this.sinup_data.mobile == '' || this.sinup_data.mobile == undefined){
        this.webService.makeFocusById('mobile')
       // alert("Enter valid Mobile in Personal Information!!")
       this.webService.openSnackBar("Enter valid Mobile in Personal Information!!");
        return
      }
      if(this.sinup_data.password == '' || this.sinup_data.password == undefined){
        this.webService.makeFocusById('password')
      //  alert("Enter valid Password in Personal Information!!")
      this.webService.openSnackBar("Enter valid Password in Personal Information!!");
        return
      }
      if(this.sinup_data.add_one == '' || this.sinup_data.add_one == undefined){
        this.webService.makeFocusById('add_one')
      //  alert("Enter valid Address 1 in Address!!")
      this.webService.openSnackBar("Enter valid Address 1 in Address!!");
        return
      }
      if(this.sinup_data.add_two == '' || this.sinup_data.add_two == undefined){
        this.webService.makeFocusById('add_two')
       // alert("Enter valid Address 2 in Address!!")
       this.webService.openSnackBar("Enter valid Address 2 in Address!!");
        return
      }
      if(this.sinup_data.city == '' || this.sinup_data.city == undefined){
        this.webService.makeFocusById('city')
       // alert("Enter valid City in Address!!")
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
       // alert("Enter valid Pin in Address!!")
       this.webService.openSnackBar("Enter valid Pin in Address!!");
        return
      }
      // localStorage.setItem("data", JSON.stringify(this.sinup_data));
    
      
      // Sir this is use as a static purpous 
      // if(this.sinup_data.s_name != '' && this.sinup_data.s_name != undefined && this.sinup_data.l_name != '' && this.sinup_data.l_name != undefined && this.sinup_data.email != '' && this.sinup_data.email != undefined && this.sinup_data.mobile != '' && this.sinup_data.mobile != undefined && this.sinup_data.password != '' && this.sinup_data.password != undefined && this.sinup_data.c_password != '' && this.sinup_data.c_password != undefined && this.sinup_data.add_one != '' && this.sinup_data.add_one != undefined && this.sinup_data.add_two != '' && this.sinup_data.add_two != undefined && this.sinup_data.city != '' && this.sinup_data.city != undefined && this.sinup_data.state != '' && this.sinup_data.state != undefined && this.sinup_data.pin != '' && this.sinup_data.pin != undefined){
      //   alert("Data Added Success!!")
    //  this.webService.openSnackBar("Data Added Success!!");
      // }
    // Sir i will use for dyanimic below code ..............
      let id = event;
      let url = "/admin/get_admin_data_update";
      let updateurl = url + id;
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
    }
    this.webService.updateRequest(updateurl, requestData).
    subscribe(
      data => {
         // alert(data.message);
         this.webService.openSnackBar(data.message);
          this.route.navigate(['/admin']);
          this.isView=false;
          this.isUpdate = false;  
          this.fetchingdata();
      },error => {
       // alert("Something went wrong!!");
       this.webService.openSnackBar("Something went wrong!!");
        this.route.navigate(['/admin']);
        this.fetchingdata();
      }
    );  
  }
  remove(event) {
    if (confirm('Do you want to delete this record !!')) {
    //  console.log(event);
      let id = event;
      let url = "/admin/get_admin_data_delete";
      let deleteurl = url + id;
      //console.log(deleteurl)
      this.webService.deleteRequest(deleteurl).subscribe(
        data => {          
            // alert(data.message);     
            this.webService.openSnackBar(data.message);
            this.fetchingdata();   
        }, error => {
          this.webService.openSnackBar("Something went wrong!!");
         // alert("Something went wrong!!")
          this.fetchingdata();
        }
      );
      // localStorage.removeItem("data");
      // alert("Profile Removed Successful !!");
    }
  }
  // useing localstorge
  // getdata(){
  //   let arr = JSON.parse(localStorage.getItem("data"));
  //   let myArray = [];  
  //   myArray.push(arr);  
  // console.log(myArray);  
  //   // console.log(this.profile);
  //   for(let i of myArray)
  //   {
  //   this.profile.push({
  //     'name': i.s_name +" " + i.l_name,
  //     'address' : i.add_one + " " + i.add_two + " "+ i.state + "("+ i.pin + ")",
  //     "password" : i.cpass,
  //     "email" : i.email,
  //     "mobile" : i.mobile,
  //   })
  // }
  // console.log(this.profile);
  // }

  // testing api works
  fetchingdata() {
    this.loading = true;
    this.webService.getRequest("/admin/get_admin_data").
    subscribe(
      data => {
        this.profile = data ? data : [];
        this.total=this.profile.length;
        // console.log(this.profile);
        this.loading = false;
      }, error => {
        //alert("Something went wrong!!");
        this.webService.openSnackBar("Something went wrong!!");
        this.loading = false;
      }
    );
  }
  backFor() {
    this.isView=false;
    this.isUpdate = false;
    this.forCreate = false;
    this.fetchingdata();
  }
  create() {
    // this.isListVisible = false;
    this.title = "Add"
    this.forCreate = true;
    this.isUpdate = false;
    this.sinup_data = {
      id: '',
      s_name: '',
      l_name: '',
      email: '',
      mobile: '',
      password: '',
      c_password: '',
      add_one: '',
      add_two: '',
      city: '',
      state: '',
      pin: '',
      pass :'',
      cpass:'',
      passmsg:'',
      };
  }
  save()
 {
  if(this.sinup_data.s_name == '' || this.sinup_data.s_name == undefined){
    this.webService.makeFocusById('s_name')
  //  alert("Enter valid First name in Personal Information!!")
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
    //alert("Enter valid Email in Personal Information!!")
    this.webService.openSnackBar("Enter valid Email in Personal Information!!");
    return
  }
  if(this.sinup_data.mobile == '' || this.sinup_data.mobile == undefined){
    this.webService.makeFocusById('mobile')
    this.webService.openSnackBar("Enter valid Mobile in Personal Information!!");
    return
  }
  if(this.sinup_data.password == '' || this.sinup_data.password == undefined){
    this.webService.makeFocusById('password')
    //alert("Enter valid Password in Personal Information!!")
    this.webService.openSnackBar("Enter valid Password in Personal Information!!");
    return
  }
  // if(this.sinup_data.c_password == '' || this.sinup_data.c_password == undefined){
  //   this.webService.makeFocusById('c_password')
  //   alert("Enter valid Confirm Password in Personal Information!!")
  //   return
  // }
  if(this.sinup_data.add_one == '' || this.sinup_data.add_one == undefined){
    this.webService.makeFocusById('add_one')
   // alert("Enter valid Address 1 in Address!!")
   this.webService.openSnackBar("Enter valid Address 1 in Address!!");
    return
  }
  if(this.sinup_data.add_two == '' || this.sinup_data.add_two == undefined){
    this.webService.makeFocusById('add_two')
   // alert("Enter valid Address 2 in Address!!")
   this.webService.openSnackBar("Enter valid Address 2 in Address!!");
    return
  }
  if(this.sinup_data.city == '' || this.sinup_data.city == undefined){
    this.webService.makeFocusById('city')
   // alert("Enter valid City in Address!!")
   this.webService.openSnackBar("Enter valid City in Address!!");
    return
  }
  if(this.sinup_data.state == '' || this.sinup_data.state == undefined){
    this.webService.makeFocusById('state')
    this.webService.openSnackBar("Enter valid State in Address!!");
  //  alert("Enter valid State in Address!!")
    return
  }
  if(this.sinup_data.pin == '' || this.sinup_data.pin == undefined){
    this.webService.makeFocusById('pin')
   // alert("Enter valid Pin in Address!!")
   this.webService.openSnackBar("Enter valid Pin in Address!!");
    return
  }
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
}
this.webService.postRequest("/admin/save_admin_data", requestData).
subscribe(
  data => {
    //  alert(data.message);
    this.webService.openSnackBar(data.message);
      this.route.navigate(['/admin']);
      this.isView=false;
      this.isUpdate = false; 
      this.forCreate = false; 
      this.fetchingdata();
  },error => {
   // alert("Something went wrong!!");
   this.webService.openSnackBar("Something went wrong!!");
    this.route.navigate(['/admin']);
    this.isView=false;
    this.isUpdate = false;  
    this.forCreate = false;
    this.fetchingdata();
  }
);
 }  
 onTableDataChange(event){
  this.page = event;
  this.fetchingdata();
}  

onTableSizeChange(event): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchingdata();
}
exportAsXLSX():void {  
  this.excelService.exportAsExcelFile(this.excel, 'sample');  
}  
public getJSON(): Observable<any> {  
 return this.http.get('https://api.myjson.com/bins/zg8of');  
}  
}
