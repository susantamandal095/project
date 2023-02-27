import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  companyname = new BehaviorSubject<string>('Susanta Demo for test');
  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }
  postRequest(url: string, data: any): any {
    let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
})
let payload = data; 
let endPoint ='http://localhost:3000' + url;
return this.http.post(endPoint, payload);

  }
  getRequest(url: string): any {
    let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}) 
let endPoint ='http://localhost:3000' + url;
console.log(endPoint)
return this.http.get(endPoint);

  }
  deleteRequest(url: string): any {
    let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}) 
let endPoint ='http://localhost:3000' + url;
return this.http.delete(endPoint);

  }
  updateRequest(url: string, data: any): any {
    let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
})
let payload = data; 
let endPoint ='http://localhost:3000' + url;
return this.http.put(endPoint, payload);

  }
  makeFocusById(id: string) {
    setTimeout(() => {
      document.getElementById(id).focus()
    }, 500);
  }
  openSnackBar(datamessage) {
    this._snackBar.open(datamessage, 'ok', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  padValue(value): number {
    return Number(value) < 10 ? '0' + value : value;
  }
  formatDate(date, format, seperator, isTime?: boolean) {
    if (date == '-NaN-NaN' || date == 'NaN-NaN-NaN' || date == '' || date == undefined || date == null) {
      return;
    }
    if (date != "" && date != undefined) {
      let d = new Date(date),
        mm = '' + (d.getMonth() + 1),
        mmm: any = d.getMonth(),
        dd = '' + d.getDate(),
        yy = d.getFullYear() ? d.getFullYear() : '';
      let month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      if (mm.length < 2) mm = '0' + mm;
      if (dd.length < 2) dd = '0' + dd;
      let part = format.split(seperator);
      mmm = month_names[mmm];
      let sHour = d.getHours();
      let sMinute = this.padValue(d.getMinutes());
      let sAMPM = "AM";
      let iHourCheck = Number(sHour);
      if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
      }
      else if (iHourCheck === 0) {
        sHour = 12;
      }
      sHour = this.padValue(sHour);
      try {
        if (isTime) {
          return eval(part[0]) + seperator + eval(part[1]) + seperator + eval(part[2]) + " " + sHour + ":" + sMinute + " " + sAMPM;
        }
        return eval(part[0]) + seperator + eval(part[1]) + seperator + eval(part[2]);
      }
      catch (e) {
        return '';
      }
    }
  }
}
