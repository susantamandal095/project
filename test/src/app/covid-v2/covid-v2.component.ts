import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidserviceService } from '../shared/services/covidservice.service';
  
@Component({
  selector: 'app-covid-v2',
  templateUrl: './covid-v2.component.html',
  styleUrls: ['./covid-v2.component.scss']
})
export class CovidV2Component implements OnInit {
  record_one:any={};
  new_array:any={};
  page = 1;
    count = 0;
    tableSize = 10;
    tableSizes = [3, 6, 9, 12];
  total: any;
  loading: boolean;
  constructor(private webapi: CovidserviceService) { 
   
  }

  ngOnInit(): void {
     this.getRecord_one();
  }
  getRecord_one() {
    let requestData:any={}  
    this.loading = true;   
    this.webapi.postRequest("country/india", requestData).
      subscribe(
        data => {
          this.record_one =data;
           this.total=this.record_one.length;
           this.new_array=this.record_one.reverse();
           this.loading = false;
          //   this.multi$ = this.record_one.map(datum => ({name: datum.Date, value: datum.Lon}));
          //  console.log(this.multi$)
          // if(this.record){
          //   for(let i of this.record.statewise){
          //     console.log(i);
          //     this.total_confirmed = i.confirmed;
          //     this.total_deth = i.deaths;
          //     this.total_active = i.active;
          //     this.total_recovered = i.recovered;
          //     this.last_update = i.lastupdatedtime;
          // console.log(this.new_array)
          // console.log(this.total);
              
          //   }
          // }
        },
        error => {
          alert("something went wrong");
          this.loading = false;
        }
      );
  }
  onTableDataChange(event){
    this.page = event;
    this.getRecord_one();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getRecord_one();
  }
}
