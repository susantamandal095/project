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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  loading: boolean;
  isTrue: boolean = false;
  profile: any = [];
  // route: any;
  value: any;
  productsize: any = [{
    'id': 0,
    'size': 'S',
  },
  {
    'id': 1,
    'size': 'M',
  },
  {
    'id': 2,
    'size': 'L',
  },
  {
    'id': 3,
    'size': 'XL',
  },
  {
    'id': 4,
    'size': 'XXL',
  },
]
  sinup_data: any = {
    "id": '',
    "product_name": '',
    "product_brand_name": '',
    "product_size": '',
    "product_description": '',
    "product_qty": '',
    //"c_product_qty": '',
    "product_quality": '',
    "product_base_price": '',
    "product_discount_price": '',
    // "state": '',
    // "pin": '',
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
  product_sizeFormControl = new FormControl('', [
    Validators.required,
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
  product_qtyFormControl = new FormControl('', [
    Validators.required,
  //  Validators.phone,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  // pinFormControl = new FormControl('', [
  //   Validators.required,
    
  // ]);
  product_discount_priceFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  // stateFormControl = new FormControl('', [
  //   Validators.required,
    
  // ]);
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
    this.sinup_data.product_name = data.product_name ? data.product_name : '';
    this.sinup_data.product_brand_name = data.product_brand_name ? data.product_brand_name :'';
    this.sinup_data.product_size = data.product_size ? data.product_size :'';
    this.sinup_data.product_description = data.product_description ? data.product_description : '';
    this.sinup_data.product_qty = data.product_qty ? data.product_qty :'';
    this.sinup_data.product_quality = data.product_quality ? data.product_quality :'';
    this.sinup_data.product_base_price = data.product_base_price ? data.product_base_price :'';
    this.sinup_data.product_discount_price = data.product_discount_price ? data.product_discount_price :'';
    // this.sinup_data.state = data.state ? data.state :'';
    // this.sinup_data.pin = data.pin ? data.pin :'';
    
}
  update(event) {
 //   console.log(event)
    // alert("Update Successful !!")
    // this.value = new Date().toLocaleTimeString([], {
    //   hour: '2-digit',
    //   minute: '2-digit'
    // });
      if(this.sinup_data.product_name == '' || this.sinup_data.product_name == undefined){
        this.webService.makeFocusById('product_name')
      //  alert("Enter valid First name in Personal Information!!")
      this.webService.openSnackBar("Enter valid First name in Personal Information!!");
        return
      }
      if(this.sinup_data.product_brand_name == '' || this.sinup_data.product_brand_name == undefined){
        this.webService.makeFocusById('product_brand_name')
        // alert("Enter valid Last name in Personal Information!!")
        this.webService.openSnackBar("Enter valid Last name in Personal Information!!");
        return
      }
      if(this.sinup_data.product_size == '' || this.sinup_data.product_size == undefined){
        this.webService.makeFocusById('product_size')
       // alert("Enter valid product_size in Personal Information!!")
       this.webService.openSnackBar("Enter valid product_size in Personal Information!!");
        return
      }
      if(this.sinup_data.product_description == '' || this.sinup_data.product_description == undefined){
        this.webService.makeFocusById('product_description')
       // alert("Enter valid product_description in Personal Information!!")
       this.webService.openSnackBar("Enter valid product_description in Personal Information!!");
        return
      }
      if(this.sinup_data.product_qty == '' || this.sinup_data.product_qty == undefined){
        this.webService.makeFocusById('product_qty')
      //  alert("Enter valid product_qty in Personal Information!!")
      this.webService.openSnackBar("Enter valid product_qty in Personal Information!!");
        return
      }
      if(this.sinup_data.product_quality == '' || this.sinup_data.product_quality == undefined){
        this.webService.makeFocusById('product_quality')
      //  alert("Enter valid Address 1 in Address!!")
      this.webService.openSnackBar("Enter valid Address 1 in Address!!");
        return
      }
      if(this.sinup_data.product_base_price == '' || this.sinup_data.product_base_price == undefined){
        this.webService.makeFocusById('product_base_price')
       // alert("Enter valid Address 2 in Address!!")
       this.webService.openSnackBar("Enter valid Address 2 in Address!!");
        return
      }
      if(this.sinup_data.product_discount_price == '' || this.sinup_data.product_discount_price == undefined){
        this.webService.makeFocusById('product_discount_price')
       // alert("Enter valid product_discount_price in Address!!")
       this.webService.openSnackBar("Enter valid product_discount_price in Address!!");
        return
      }
      // if(this.sinup_data.state == '' || this.sinup_data.state == undefined){
      //   this.webService.makeFocusById('state')
      // //  alert("Enter valid State in Address!!")
      // this.webService.openSnackBar("Enter valid State in Address!!");
      //   return
      // }
      // if(this.sinup_data.pin == '' || this.sinup_data.pin == undefined){
      //   this.webService.makeFocusById('pin')
      //  // alert("Enter valid Pin in Address!!")
      //  this.webService.openSnackBar("Enter valid Pin in Address!!");
      //   return
      // }
      // localStorage.setItem("data", JSON.stringify(this.sinup_data));
    
      
      // Sir this is use as a static purpous 
      // if(this.sinup_data.product_name != '' && this.sinup_data.product_name != undefined && this.sinup_data.product_brand_name != '' && this.sinup_data.product_brand_name != undefined && this.sinup_data.product_size != '' && this.sinup_data.product_size != undefined && this.sinup_data.product_description != '' && this.sinup_data.product_description != undefined && this.sinup_data.product_qty != '' && this.sinup_data.product_qty != undefined && this.sinup_data.c_product_qty != '' && this.sinup_data.c_product_qty != undefined && this.sinup_data.product_quality != '' && this.sinup_data.product_quality != undefined && this.sinup_data.product_base_price != '' && this.sinup_data.product_base_price != undefined && this.sinup_data.product_discount_price != '' && this.sinup_data.product_discount_price != undefined && this.sinup_data.state != '' && this.sinup_data.state != undefined && this.sinup_data.pin != '' && this.sinup_data.pin != undefined){
      //   alert("Data Added Success!!")
    //  this.webService.openSnackBar("Data Added Success!!");
      // }
    // Sir i will use for dyanimic below code ..............
      let id = event;
      let url = "/product/get_product_data_update";
      let updateurl = url + id;
    let requestData = {
      "product_name": this.sinup_data.product_name ? this.sinup_data.product_name : '',
      "product_brand_name": this.sinup_data.product_brand_name ? this.sinup_data.product_brand_name : '',
      "product_size": this.sinup_data.product_size ? this.sinup_data.product_size : '',
      "product_description": this.sinup_data.product_description ? this.sinup_data.product_description : '',
      "product_qty": this.sinup_data.product_qty ? this.sinup_data.product_qty : '',
      "product_quality": this.sinup_data.product_quality ? this.sinup_data.product_quality : '',
      "product_base_price": this.sinup_data.product_base_price ? this.sinup_data.product_base_price : '',
      "product_discount_price": this.sinup_data.product_discount_price ? this.sinup_data.product_discount_price : '',
      // "state": this.sinup_data.state ? this.sinup_data.state : '',
      // "pin": this.sinup_data.pin ? this.sinup_data.pin : '',
    }
    this.webService.updateRequest(updateurl, requestData).
    subscribe(
      data => {
         // alert(data.message);
         this.webService.openSnackBar(data.message);
          this.route.navigate(['/product']);
          this.isView=false;
          this.isUpdate = false;  
          this.fetchingdata();
      },error => {
       // alert("Something went wrong!!");
       this.webService.openSnackBar("Something went wrong!!");
        this.route.navigate(['/product']);
        this.fetchingdata();
      }
    );  
  }
  remove(event) {
    if (confirm('Do you want to delete this record !!')) {
    //  console.log(event);
      let id = event;
      let url = "/product/get_product_data_delete";
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
  //     'name': i.product_name +" " + i.product_brand_name,
  //     'address' : i.product_quality + " " + i.product_base_price + " "+ i.state + "("+ i.pin + ")",
  //     "product_qty" : i.cpass,
  //     "product_size" : i.product_size,
  //     "product_description" : i.product_description,
  //   })
  // }
  // console.log(this.profile);
  // }

  // testing api works
  fetchingdata() {
    this.loading = true;
    this.webService.getRequest("/product/get_product_data").
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
      product_name: '',
      product_brand_name: '',
      product_size: '',
      product_description: '',
      product_qty: '',
      //c_product_qty: '',
      product_quality: '',
      product_base_price: '',
      product_discount_price: '',
      // state: '',
      // pin: '',
      pass :'',
      cpass:'',
      passmsg:'',
      };
  }
  save()
 {
  if(this.sinup_data.product_name == '' || this.sinup_data.product_name == undefined){
    this.webService.makeFocusById('product_name')
  //  alert("Enter valid First name in Personal Information!!")
  this.webService.openSnackBar("Enter valid First name in Personal Information!!");
    return
  }
  if(this.sinup_data.product_brand_name == '' || this.sinup_data.product_brand_name == undefined){
    this.webService.makeFocusById('product_brand_name')
  //  alert("Enter valid Last name in Personal Information!!")
  this.webService.openSnackBar("Enter valid Last name in Personal Information!!");
    return
  }
  if(this.sinup_data.product_size == '' || this.sinup_data.product_size == undefined){
    this.webService.makeFocusById('product_size')
    //alert("Enter valid product_size in Personal Information!!")
    this.webService.openSnackBar("Enter valid product_size in Personal Information!!");
    return
  }
  if(this.sinup_data.product_description == '' || this.sinup_data.product_description == undefined){
    this.webService.makeFocusById('product_description')
    this.webService.openSnackBar("Enter valid product_description in Personal Information!!");
    return
  }
  if(this.sinup_data.product_qty == '' || this.sinup_data.product_qty == undefined){
    this.webService.makeFocusById('product_qty')
    //alert("Enter valid product_qty in Personal Information!!")
    this.webService.openSnackBar("Enter valid product_qty in Personal Information!!");
    return
  }
  // if(this.sinup_data.c_product_qty == '' || this.sinup_data.c_product_qty == undefined){
  //   this.webService.makeFocusById('c_product_qty')
  //   alert("Enter valid Confirm product_qty in Personal Information!!")
  //   return
  // }
  if(this.sinup_data.product_quality == '' || this.sinup_data.product_quality == undefined){
    this.webService.makeFocusById('product_quality')
   // alert("Enter valid Address 1 in Address!!")
   this.webService.openSnackBar("Enter valid Address 1 in Address!!");
    return
  }
  if(this.sinup_data.product_base_price == '' || this.sinup_data.product_base_price == undefined){
    this.webService.makeFocusById('product_base_price')
   // alert("Enter valid Address 2 in Address!!")
   this.webService.openSnackBar("Enter valid Address 2 in Address!!");
    return
  }
  if(this.sinup_data.product_discount_price == '' || this.sinup_data.product_discount_price == undefined){
    this.webService.makeFocusById('product_discount_price')
   // alert("Enter valid product_discount_price in Address!!")
   this.webService.openSnackBar("Enter valid product_discount_price in Address!!");
    return
  }
  // if(this.sinup_data.state == '' || this.sinup_data.state == undefined){
  //   this.webService.makeFocusById('state')
  //   this.webService.openSnackBar("Enter valid State in Address!!");
  // //  alert("Enter valid State in Address!!")
  //   return
  // }
  // if(this.sinup_data.pin == '' || this.sinup_data.pin == undefined){
  //   this.webService.makeFocusById('pin')
  //  // alert("Enter valid Pin in Address!!")
  //  this.webService.openSnackBar("Enter valid Pin in Address!!");
  //   return
  // }
let requestData = {
  "product_name": this.sinup_data.product_name ? this.sinup_data.product_name : '',
  "product_brand_name": this.sinup_data.product_brand_name ? this.sinup_data.product_brand_name : '',
  "product_size": this.sinup_data.product_size ? this.sinup_data.product_size : '',
  "product_description": this.sinup_data.product_description ? this.sinup_data.product_description : '',
  "product_qty": this.sinup_data.product_qty ? this.sinup_data.product_qty : '',
  "product_quality": this.sinup_data.product_quality ? this.sinup_data.product_quality : '',
  "product_base_price": this.sinup_data.product_base_price ? this.sinup_data.product_base_price : '',
  "product_discount_price": this.sinup_data.product_discount_price ? this.sinup_data.product_discount_price : '',
  // "state": this.sinup_data.state ? this.sinup_data.state : '',
  // "pin": this.sinup_data.pin ? this.sinup_data.pin : '',
}
this.webService.postRequest("/product/save_product_data", requestData).
subscribe(
  data => {
    //  alert(data.message);
    this.webService.openSnackBar(data.message);
      this.route.navigate(['/product']);
      this.isView=false;
      this.isUpdate = false; 
      this.forCreate = false; 
      this.fetchingdata();
  },error => {
   // alert("Something went wrong!!");
   this.webService.openSnackBar("Something went wrong!!");
    this.route.navigate(['/product']);
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
