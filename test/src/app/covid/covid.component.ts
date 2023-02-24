import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidserviceService } from '../shared/services/covidservice.service';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {
  // total_recovered: any;
  // total_active: any;
  // last_update: any;
  record:any={};
state:any={};
travel:any={};
data_ind:any={};
// total_confirmed:any;
// total_deth:any;
page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 6, 9, 12];
  total: any;
  pageone = 1;
  countone = 0;
  tableSizeone = 10;
  tableSizesone = [3, 6, 9, 12];
  totalone: any;
  loading: boolean;
//@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private webapi: CovidserviceService ) { }
  ngOnInit(): void {
    this.getRecord();
    // this.district();
    this.travel_history();
   // this.paginator = this.paginator;
  }
  getRecord() {
    let requestData:any={}  
    this.loading = true;  
    this.webapi.postRequest("live/country/india/status/confirmed", requestData).
      subscribe(
        data => {
          this.record =data; 
          this.total=this.record.length;
          this.data_ind=this.record.reverse();
          // console.log(this.record)
          // if(this.record){
          //   for(let i of this.record.statewise){
          //     console.log(i);
          //     this.total_confirmed = i.confirmed;
          //     this.total_deth = i.deaths;
          //     this.total_active = i.active;
          //     this.total_recovered = i.recovered;
          //     this.last_update = i.lastupdatedtime;

              
          //   }
          // }
          this.loading = false; 
        },
        error => {
          alert("something went wrong")
          this.loading = false; 
        }
      );
  }
  // district() {
  //   let requestData:any={}    
  //   this.webapi.getRequest("/state_district_wise.json", requestData).
  //     subscribe(
  //       data => {
  //         this.state =data;
  //         console.log(this.state)
  //       },
  //       error => {
  //       }
  //     );
  // }
  travel_history() {
    let requestData:any={}    
    this.webapi.getRequest("/travel_history.json", requestData).
      subscribe(
        data => {
          this.travel =data;
          this.total=this.travel.length;
          // console.log(this.travel)
        },
        error => {
        }
      );
  }

  onTableDataChange(event){
    this.page = event;
    this.getRecord();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getRecord();
  }
  onTableDataChangeone(event){
    this.pageone = event;
    this.travel_history();
  }  

  onTableSizeChangeone(event): void {
    this.tableSize = event.target.value;
    this.pageone = 1;
    this.travel_history();
  }
  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName)
    {
    (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
    }
    }
    }
}
