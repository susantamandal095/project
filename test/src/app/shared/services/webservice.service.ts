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
}
