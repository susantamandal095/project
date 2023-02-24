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
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {

  loading: boolean;
  isTrue: boolean = false;
  profile: any = [];
  // route: any;
  value: any;
  sinup_data_bug: any = {
    "id": '',
    "qc_pending": '',
    "pending_request": '',
    "complete_request": '',
    "qc_developers": '',
    "complete_developers": '',
    "pending_developers": '',
    "qc_support_developers": '',
    "pending_support_developers": '',
    "complete_support_developers": '',
    "qc_developers_days": '',
    "pending_developers_days": '',
    "complete_developers_days": '',
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
  date_update: string;
  date_updates : string;
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
  complete_requestFormControl = new FormControl('', [
    Validators.required,
   // Validators.complete_request,
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
  complete_developersFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    
  ]); 
  pending_developers_daysFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  pending_developersFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  complete_developers_daysFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  complete_support_developersFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  qc_developers_daysFormControl = new FormControl('', [
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
    this.sinup_data_bug.id = data._id;
    this.sinup_data_bug.qc_pending = data.qc_pending ? data.qc_pending : '';
    this.sinup_data_bug.pending_request = data.pending_request ? data.pending_request :'';
    this.sinup_data_bug.complete_request = data.complete_request ? data.complete_request :'';
    this.sinup_data_bug.qc_developers = data.qc_developers ? data.qc_developers : '';
    this.sinup_data_bug.complete_developers = data.complete_developers ? data.complete_developers :'';
    this.sinup_data_bug.qc_support_developers = data.qc_support_developers ? data.qc_support_developers :'';
    this.sinup_data_bug.pending_support_developers = data.pending_support_developers ? data.pending_support_developers :'';
    this.sinup_data_bug.complete_support_developers = data.complete_support_developers ? data.complete_support_developers :'';
    this.sinup_data_bug.qc_developers_days = data.qc_developers_days ? data.qc_developers_days :'';
    this.sinup_data_bug.pending_developers_days = data.pending_developers_days ? data.pending_developers_days :'';
    this.sinup_data_bug.complete_developers_days = data.complete_developers_days ? data.complete_developers_days :'';
    this.sinup_data_bug.pending_developers = data.pending_developers ? data.pending_developers :'';
}
  update(event) {
 //   console.log(event)
    // alert("Update Successful !!")
    // this.value = new Date().toLocaleTimeString([], {
    //   hour: '2-digit',
    //   minute: '2-digit'
    // });
      if(this.sinup_data_bug.qc_pending == '' || this.sinup_data_bug.qc_pending == undefined){
        this.webService.makeFocusById('qc_pending')
      //  alert("Enter valid First name in Personal Information!!")
      this.webService.openSnackBar("Enter valid First name in Personal Information!!");
        return
      }
      if(this.sinup_data_bug.pending_request == '' || this.sinup_data_bug.pending_request == undefined){
        this.webService.makeFocusById('pending_request')
        // alert("Enter valid Last name in Personal Information!!")
        this.webService.openSnackBar("Enter valid Last name in Personal Information!!");
        return
      }
      if(this.sinup_data_bug.complete_request == '' || this.sinup_data_bug.complete_request == undefined){
        this.webService.makeFocusById('complete_request')
       // alert("Enter valid complete_request in Personal Information!!")
       this.webService.openSnackBar("Enter valid complete_request in Personal Information!!");
        return
      }
      if(this.sinup_data_bug.qc_developers == '' || this.sinup_data_bug.qc_developers == undefined){
        this.webService.makeFocusById('qc_developers')
       // alert("Enter valid qc_developers in Personal Information!!")
       this.webService.openSnackBar("Enter valid qc_developers in Personal Information!!");
        return
      }
      if(this.sinup_data_bug.complete_developers == '' || this.sinup_data_bug.complete_developers == undefined){
        this.webService.makeFocusById('complete_developers')
      //  alert("Enter valid complete_developers in Personal Information!!")
      this.webService.openSnackBar("Enter valid complete_developers in Personal Information!!");
        return
      }
      if(this.sinup_data_bug.qc_support_developers == '' || this.sinup_data_bug.qc_support_developers == undefined){
        this.webService.makeFocusById('qc_support_developers')
      //  alert("Enter valid Address 1 in Address!!")
      this.webService.openSnackBar("Enter valid Address 1 in Address!!");
        return
      }
      if(this.sinup_data_bug.pending_support_developers == '' || this.sinup_data_bug.pending_support_developers == undefined){
        this.webService.makeFocusById('pending_support_developers')
       // alert("Enter valid Address 2 in Address!!")
       this.webService.openSnackBar("Enter valid Address 2 in Address!!");
        return
      }
      if(this.sinup_data_bug.complete_support_developers == '' || this.sinup_data_bug.complete_support_developers == undefined){
        this.webService.makeFocusById('complete_support_developers')
       // alert("Enter valid complete_support_developers in Address!!")
       this.webService.openSnackBar("Enter valid complete_support_developers in Address!!");
        return
      }
      if(this.sinup_data_bug.qc_developers_days == '' || this.sinup_data_bug.qc_developers_days == undefined){
        this.webService.makeFocusById('qc_developers_days')
      //  alert("Enter valid qc_developers_days in Address!!")
      this.webService.openSnackBar("Enter valid qc_developers_days in Address!!");
        return
      }
      if(this.sinup_data_bug.pending_developers_days == '' || this.sinup_data_bug.pending_developers_days == undefined){
        this.webService.makeFocusById('pending_developers_days')
       // alert("Enter valid pending_developers_days in Address!!")
       this.webService.openSnackBar("Enter valid pending_developers_days in Address!!");
        return
      }
      if(this.sinup_data_bug.complete_developers_days == '' || this.sinup_data_bug.complete_developers_days == undefined){
        this.webService.makeFocusById('complete_developers_days')
       // alert("Enter valid complete_developers_days in Address!!")
       this.webService.openSnackBar("Enter valid complete_developers_days in Address!!");
        return
      }
      if(this.sinup_data_bug.pending_developers == '' || this.sinup_data_bug.pending_developers == undefined){
        this.webService.makeFocusById('pending_developers')
       // alert("Enter valid pending_developers in Address!!")
       this.webService.openSnackBar("Enter valid pending_developers in Address!!");
        return
      }
      // localStorage.setItem("data", JSON.stringify(this.sinup_data_bug));
    
      
      // Sir this is use as a static purpous 
      // if(this.sinup_data_bug.qc_pending != '' && this.sinup_data_bug.qc_pending != undefined && this.sinup_data_bug.pending_request != '' && this.sinup_data_bug.pending_request != undefined && this.sinup_data_bug.complete_request != '' && this.sinup_data_bug.complete_request != undefined && this.sinup_data_bug.qc_developers != '' && this.sinup_data_bug.qc_developers != undefined && this.sinup_data_bug.complete_developers != '' && this.sinup_data_bug.complete_developers != undefined && this.sinup_data_bug.pending_developers != '' && this.sinup_data_bug.pending_developers != undefined && this.sinup_data_bug.qc_support_developers != '' && this.sinup_data_bug.qc_support_developers != undefined && this.sinup_data_bug.pending_support_developers != '' && this.sinup_data_bug.pending_support_developers != undefined && this.sinup_data_bug.complete_support_developers != '' && this.sinup_data_bug.complete_support_developers != undefined && this.sinup_data_bug.qc_developers_days != '' && this.sinup_data_bug.qc_developers_days != undefined && this.sinup_data_bug.pending_developers_days != '' && this.sinup_data_bug.pending_developers_days != undefined){
      //   alert("Data Added Success!!")
    //  this.webService.openSnackBar("Data Added Success!!");
      // }
    // Sir i will use for dyanimic below code ..............
    this.date_updates = new Date().toLocaleString();
      let id = event;
      let url = "/bugss/get_bugss_data_update";
      let updateurl = url + id;
    let requestData = {
      "qc_pending": this.sinup_data_bug.qc_pending ? this.sinup_data_bug.qc_pending : '',
      "pending_request": this.sinup_data_bug.pending_request ? this.sinup_data_bug.pending_request : '',
      "complete_request": this.sinup_data_bug.complete_request ? this.sinup_data_bug.complete_request : '',
      "qc_developers": this.sinup_data_bug.qc_developers ? this.sinup_data_bug.qc_developers : '',
      "complete_developers": this.sinup_data_bug.complete_developers ? this.sinup_data_bug.complete_developers : '',
      "qc_support_developers": this.sinup_data_bug.qc_support_developers ? this.sinup_data_bug.qc_support_developers : '',
      "pending_support_developers": this.sinup_data_bug.pending_support_developers ? this.sinup_data_bug.pending_support_developers : '',
      "complete_support_developers": this.sinup_data_bug.complete_support_developers ? this.sinup_data_bug.complete_support_developers : '',
      "qc_developers_days": this.sinup_data_bug.qc_developers_days ? this.sinup_data_bug.qc_developers_days : '',
      "pending_developers_days": this.sinup_data_bug.pending_developers_days ? this.sinup_data_bug.pending_developers_days : '',
      "pending_developers": this.sinup_data_bug.pending_developers ? this.sinup_data_bug.pending_developers : '',
      "complete_developers_days": this.sinup_data_bug.complete_developers_days ? this.sinup_data_bug.complete_developers_days : '',
      "last_update_date": this.date_updates ? this.date_updates : '',
    }
    this.webService.updateRequest(updateurl, requestData).
    subscribe(
      data => {
         // alert(data.message);
         this.webService.openSnackBar(data.message);
          this.route.navigate(['/bugs']);
          this.isView=false;
          this.isUpdate = false;  
          this.fetchingdata();
      },error => {
       // alert("Something went wrong!!");
       this.webService.openSnackBar("Something went wrong!!");
        this.route.navigate(['/bugs']);
        this.fetchingdata();
      }
    );  
  }
  remove(event) {
    if (confirm('Do you want to delete this record !!')) {
    //  console.log(event);
      let id = event;
      let url = "/bugss/get_bugss_data_delete";
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
  //     'name': i.qc_pending +" " + i.pending_request,
  //     'address' : i.qc_support_developers + " " + i.pending_support_developers + " "+ i.qc_developers_days + "("+ i.pending_developers_days + ")",
  //     "complete_developers" : i.cpass,
  //     "complete_request" : i.complete_request,
  //     "qc_developers" : i.qc_developers,
  //   })
  // }
  // console.log(this.profile);
  // }

  // testing api works
  fetchingdata() {
    this.loading = true;
    this.webService.getRequest("/bugss/get_bugss_data").
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
    this.sinup_data_bug = {
      id: '',
      qc_pending: '',
      pending_request: '',
      complete_request: '',
      qc_developers: '',
      complete_developers: '',
      pending_developers: '',
      qc_support_developers: '',
      pending_support_developers: '',
      complete_support_developers: '',
      qc_developers_days: '',
      pending_developers_days: '',
      complete_developers_days:'',
      pass :'',
      cpass:'',
      passmsg:'',
      };
  }
  bugspo : any = [];
  save()
 {
  if(this.sinup_data_bug.qc_pending == '' || this.sinup_data_bug.qc_pending == undefined){
    this.webService.makeFocusById('qc_pending')
  //  alert("Enter valid First name in Personal Information!!")
  this.webService.openSnackBar("Enter valid First name in Personal Information!!");
    return
  }
  if(this.sinup_data_bug.pending_request == '' || this.sinup_data_bug.pending_request == undefined){
    this.webService.makeFocusById('pending_request')
  //  alert("Enter valid Last name in Personal Information!!")
  this.webService.openSnackBar("Enter valid Last name in Personal Information!!");
    return
  }
  if(this.sinup_data_bug.complete_request == '' || this.sinup_data_bug.complete_request == undefined){
    this.webService.makeFocusById('complete_request')
    //alert("Enter valid complete_request in Personal Information!!")
    this.webService.openSnackBar("Enter valid complete_request in Personal Information!!");
    return
  }
  if(this.sinup_data_bug.qc_developers == '' || this.sinup_data_bug.qc_developers == undefined){
    this.webService.makeFocusById('qc_developers')
    this.webService.openSnackBar("Enter valid qc_developers in Personal Information!!");
    return
  }
  if(this.sinup_data_bug.complete_developers == '' || this.sinup_data_bug.complete_developers == undefined){
    this.webService.makeFocusById('complete_developers')
    //alert("Enter valid complete_developers in Personal Information!!")
    this.webService.openSnackBar("Enter valid complete_developers in Personal Information!!");
    return
  }
  // if(this.sinup_data_bug.pending_developers == '' || this.sinup_data_bug.pending_developers == undefined){
  //   this.webService.makeFocusById('pending_developers')
  //   alert("Enter valid Confirm complete_developers in Personal Information!!")
  //   return
  // }
  if(this.sinup_data_bug.qc_support_developers == '' || this.sinup_data_bug.qc_support_developers == undefined){
    this.webService.makeFocusById('qc_support_developers')
   // alert("Enter valid Address 1 in Address!!")
   this.webService.openSnackBar("Enter valid Address 1 in Address!!");
    return
  }
  if(this.sinup_data_bug.pending_support_developers == '' || this.sinup_data_bug.pending_support_developers == undefined){
    this.webService.makeFocusById('pending_support_developers')
   // alert("Enter valid Address 2 in Address!!")
   this.webService.openSnackBar("Enter valid Address 2 in Address!!");
    return
  }
  if(this.sinup_data_bug.complete_support_developers == '' || this.sinup_data_bug.complete_support_developers == undefined){
    this.webService.makeFocusById('complete_support_developers')
   // alert("Enter valid complete_support_developers in Address!!")
   this.webService.openSnackBar("Enter valid complete_support_developers in Address!!");
    return
  }
  if(this.sinup_data_bug.qc_developers_days == '' || this.sinup_data_bug.qc_developers_days == undefined){
    this.webService.makeFocusById('qc_developers_days')
    this.webService.openSnackBar("Enter valid qc_developers_days in Address!!");
  //  alert("Enter valid qc_developers_days in Address!!")
    return
  }
  if(this.sinup_data_bug.pending_developers_days == '' || this.sinup_data_bug.pending_developers_days == undefined){
    this.webService.makeFocusById('pending_developers_days')
   // alert("Enter valid pending_developers_days in Address!!")
   this.webService.openSnackBar("Enter valid pending_developers_days in Address!!");
    return
  }
  if(this.sinup_data_bug.complete_developers_days == '' || this.sinup_data_bug.complete_developers_days == undefined){
    this.webService.makeFocusById('complete_developers_days')
   // alert("Enter valid complete_developers_days in Address!!")
   this.webService.openSnackBar("Enter valid complete_developers_days in Address!!");
    return
  }
  if(this.sinup_data_bug.pending_developers == '' || this.sinup_data_bug.pending_developers == undefined){
    this.webService.makeFocusById('pending_developers')
   // alert("Enter valid pending_developers in Address!!")
   this.webService.openSnackBar("Enter valid pending_developers in Address!!");
    return
  }
  this.date_update = new Date().toLocaleString();
  this.bugspo = [{
    "new" : "data",
    "year" : "2022",
  }]
let requestData = {
  "qc_pending": this.sinup_data_bug.qc_pending ? this.sinup_data_bug.qc_pending : '',
  "pending_request": this.sinup_data_bug.pending_request ? this.sinup_data_bug.pending_request : '',
  "complete_request": this.sinup_data_bug.complete_request ? this.sinup_data_bug.complete_request : '',
  "qc_developers": this.sinup_data_bug.qc_developers ? this.sinup_data_bug.qc_developers : '',
  "complete_developers": this.sinup_data_bug.complete_developers ? this.sinup_data_bug.complete_developers : '',
  "qc_support_developers": this.sinup_data_bug.qc_support_developers ? this.sinup_data_bug.qc_support_developers : '',
  "pending_support_developers": this.sinup_data_bug.pending_support_developers ? this.sinup_data_bug.pending_support_developers : '',
  "complete_support_developers": this.sinup_data_bug.complete_support_developers ? this.sinup_data_bug.complete_support_developers : '',
  "qc_developers_days": this.sinup_data_bug.qc_developers_days ? this.sinup_data_bug.qc_developers_days : '',
  "pending_developers_days": this.sinup_data_bug.pending_developers_days ? this.sinup_data_bug.pending_developers_days : '',
  "complete_developers_days": this.sinup_data_bug.complete_developers_days ? this.sinup_data_bug.complete_developers_days : '',
  "pending_developers": this.sinup_data_bug.pending_developers ? this.sinup_data_bug.pending_developers : '',
  "last_update_date": this.date_update ? this.date_update : '',
  "bugspo" : this.bugspo ? this.bugspo : [],

}
this.webService.postRequest("/bugss/save_bugss_data", requestData).
subscribe(
  data => {
    //  alert(data.message);
    this.webService.openSnackBar(data.message);
      this.route.navigate(['/bugs']);
      this.isView=false;
      this.isUpdate = false;
      this.forCreate = false;
      this.fetchingdata();
  },error => {
   // alert("Something went wrong!!");
   this.webService.openSnackBar("Something went wrong!!");
    this.route.navigate(['/bugs']);
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
