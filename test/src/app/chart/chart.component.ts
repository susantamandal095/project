import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions,ChartDataSets  } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { CovidserviceService } from '../shared/services/covidservice.service';
import { WebserviceService } from '../shared/services/webservice.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  total_adm: any;
  total_bugs: any;
  allbugss: any =[];
  total_cov: any;
  total: any;
  total_cov2:any;
  companyname: string;
  last_reload_time: any;
  total_request: any;
  total_developers_included : any;
  total_developers_support : any;
  total_days_works : any;
  complete_developers_days_parsentage : any;
  pending_developers_days_parsentage : any;
  qc_developers_days_parsentage : any;
  complete_request_parsentage : any;
  pending_request_parsentage : any;
  qc_pending_parsentage : any;
  complete_developers_parsentage : any;
  pending_developers_parsentage : any;
  qc_developers_parsentage : any;
  complete_support_developers_parsentage : any;
  pending_support_developers_parsentage : any;
  qc_support_developers_parsentage : any;
  constructor(public webapi: CovidserviceService,public webService: WebserviceService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.webService.companyname.subscribe(s =>{
      this.companyname = s;
    });
      this.last_reload_time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    this.fetchingadddata();
    this.getcovRecord();
    this.getRecord_one();
    this.fetchingdata();
    this.fetchingbugdata();
  }
  fetchingadddata() {
    this.webService.getRequest("/admin/get_admin_data").
    subscribe(
      data => {
        this.total_adm = data.length ? data.length : [];
      }, error => {
        alert("Something went wrong!!");
      }
    );
  }
  getcovRecord() {  
    let requestData:any={} 
    this.webapi.postRequest("live/country/india/status/confirmed", requestData).
      subscribe(
        data => {
          this.total_cov =data.length;
        },
        error => {
          alert("something went wrong")
        }
      );
  }
  getRecord_one() {
    let requestData:any={}     
    this.webapi.postRequest("country/india", requestData).
      subscribe(
        data => {
          this.total_cov2 =data.length;
        },
        error => {
          alert("something went wrong");
        }
      );
  }
  fetchingdata() { 
    this.webService.getRequest("/user/get_user").
    subscribe(
      data => {
        this.total = data ? data.length : [];
      }, error => {
        alert("Something went wrong!!");
      }
    );
  }
  fetchingbugdata() {
    this.webService.getRequest("/bugss/get_bugss_data").
    subscribe(
      data => {
        this.total_bugs = data.length ? data.length : [];
        this.allbugss = data ? data : [];
        // var result = [];

        // for (var i = 0; i < this.allbugss.length; i++) {
        //     var newArray = [];
        //     newArray.push( this.allbugss[i]["complete_developers_days"] );
        //     newArray.push( this.allbugss[i]["pending_developers"] );    
        //     result.push( newArray );    
        // }
        
        // console.log( result );
        // console.log(this.allbugss);
        for(let i of this.allbugss) {
          // console.log(i)

          // For Total value of bugs 
          this.total_request = parseFloat(i.qc_pending) + parseFloat(i.pending_request) + parseFloat(i.complete_request);   
          this.total_developers_included = parseFloat(i.complete_developers) + parseFloat(i.pending_developers) + parseFloat(i.qc_developers);
          this.total_days_works = parseFloat(i.complete_developers_days) + parseFloat(i.pending_developers_days) + parseFloat(i.qc_developers_days);
          this.total_developers_support = parseFloat(i.complete_support_developers) + parseFloat(i.pending_support_developers) + parseFloat(i.qc_support_developers);       
         // For Total value of bugs complete_request_parsentage
          this.complete_request_parsentage = parseFloat(i.complete_request) / parseFloat(this.total_request) * 100;
          this.complete_request_parsentage = parseFloat(this.complete_request_parsentage).toFixed(2) ? parseFloat(this.complete_request_parsentage).toFixed(2) : '0.00';
          this.pending_request_parsentage = parseFloat(i.pending_request) / parseFloat(this.total_request) * 100;
          this.pending_request_parsentage = parseFloat(this.pending_request_parsentage).toFixed(2) ? parseFloat(this.pending_request_parsentage).toFixed(2) : '0.00';
          this.qc_pending_parsentage = parseFloat(i.qc_pending) / parseFloat(this.total_request) * 100;
          this.qc_pending_parsentage = parseFloat(this.qc_pending_parsentage).toFixed(2) ? parseFloat(this.qc_pending_parsentage).toFixed(2) : '0.00';
          // For Total value of bugs parsentage total_developers_included
          this.complete_developers_parsentage = parseFloat(i.complete_developers) / parseFloat(this.total_developers_included) * 100;
          this.complete_developers_parsentage = parseFloat(this.complete_developers_parsentage).toFixed(2) ? parseFloat(this.complete_developers_parsentage).toFixed(2) : '0.00';
          this.pending_developers_parsentage = parseFloat(i.pending_developers) / parseFloat(this.total_developers_included) * 100;
          this.pending_developers_parsentage = parseFloat(this.pending_developers_parsentage).toFixed(2) ? parseFloat(this.pending_developers_parsentage).toFixed(2) : '0.00';
          this.qc_developers_parsentage = parseFloat(i.qc_developers) / parseFloat(this.total_developers_included) * 100;
          this.qc_developers_parsentage = parseFloat(this.qc_developers_parsentage).toFixed(2) ? parseFloat(this.qc_developers_parsentage).toFixed(2) : '0.00';
          // For Total value of bugs parsentage complete_support_developers
          this.complete_support_developers_parsentage = parseFloat(i.complete_support_developers) / parseFloat(this.total_developers_support) * 100;
          this.complete_support_developers_parsentage = parseFloat(this.complete_support_developers_parsentage).toFixed(2) ? parseFloat(this.complete_support_developers_parsentage).toFixed(2) : '0.00';
          this.pending_support_developers_parsentage = parseFloat(i.pending_support_developers) / parseFloat(this.total_developers_support) * 100;
          this.pending_support_developers_parsentage = parseFloat(this.pending_support_developers_parsentage).toFixed(2) ? parseFloat(this.pending_support_developers_parsentage).toFixed(2) : '0.00';
          this.qc_support_developers_parsentage = parseFloat(i.qc_support_developers) / parseFloat(this.total_developers_support) * 100;
          this.qc_support_developers_parsentage = parseFloat(this.qc_support_developers_parsentage).toFixed(2) ? parseFloat(this.qc_support_developers_parsentage).toFixed(2) : '0.00';
          // For Total value of bugs parsentage developers_days
          this.complete_developers_days_parsentage = parseFloat(i.complete_developers_days) / parseFloat(this.total_days_works) * 100;
          this.complete_developers_days_parsentage = parseFloat(this.complete_developers_days_parsentage).toFixed(2) ? parseFloat(this.complete_developers_days_parsentage).toFixed(2) : '0.00';
          this.pending_developers_days_parsentage = parseFloat(i.pending_developers_days) / parseFloat(this.total_days_works) * 100;
          this.pending_developers_days_parsentage = parseFloat(this.pending_developers_days_parsentage).toFixed(2) ? parseFloat(this.pending_developers_days_parsentage).toFixed(2) : '0.00';
          this.qc_developers_days_parsentage = parseFloat(i.qc_developers_days) / parseFloat(this.total_days_works) * 100;
          this.qc_developers_days_parsentage = parseFloat(this.qc_developers_days_parsentage).toFixed(2) ? parseFloat(this.qc_developers_days_parsentage).toFixed(2) : '0.00';
        }
      }, error => {
        alert("Something went wrong!!");
      }
    );
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public pieChartLabels: Label[] = ['Activity', 'Test pass', 'QC Error','test','results'];
  public pieChartData: SingleDataSet = [40, 30, 20,6,4];
  public pieChartLabelsone: Label[] = ['Error Rate','Success Rate'];
  public pieChartDataone: SingleDataSet = [10, 90];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
    
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020','2021','2022'];
  public barChartLabelsone: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020','2021','2022'];
  public barChartLabelstwo: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020','2021','2022'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
    
  public barChartData: ChartDataSets[] = [
    { data: [65, 67, 70, 75, 80, 90 ,90,90], label: 'Activity' },
    { data: [50, 48, 47, 49, 44, 40,45,49], label: 'Test pass' },
    { data: [40, 30, 28, 25, 22, 20 ,15,19], label: 'QC Error' },
  ];
  public barChartDataone: ChartDataSets[] = [
    { data: [5, 7, 9, 5, 8, 9 ,1,2], label: 'Error' },
    { data: [50, 48, 47, 49, 44, 40,45,49], label: 'Success' },
  ];
  public barChartDatatwo: ChartDataSets[] = [
    { data: [65, 67, 70, 75, 80, 90 ,90,90], label: 'Activity Request' },
    { data: [65, 61, 73, 78, 80, 70 ,100,100], label: 'Close Request' },
  ];
  public lineChartData: ChartDataSets[] = [
    { data: [61, 59, 80, 65, 45, 55, 40, 56, 76, 65, 77, 60], label: 'Test pass' },
    { data: [57, 50, 75, 87, 43, 46, 37, 48, 67, 56, 70, 50], label: 'QC Error' },
  ];
  public lineChartDataone: ChartDataSets[] = [
    { data: [0, 78, 40, 35, 67, 52, 30, 26, 96, 25, 73, 40], label: 'Reqest' },
    { data: [7, 60, 45, 57, 53, 56, 50, 30, 87, 20, 80, 46], label: 'Succes rate' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartLabelsone: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
  public lineChartOptions = {
    responsive: true,
  };
     
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
}
