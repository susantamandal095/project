import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  constructor(private http: HttpClient) { }
  postRequest(url: string, data: any): any {
    let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
})
let payload = data; 
let endPoint ='https://api.covid19api.com/' + url;
return this.http.get(endPoint, payload);

  }
  getRequest(url: string, data: any): any {
    let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
})
let payload = data; 
let endPoint ='https://data.covid19india.org/' + url;
return this.http.get(endPoint, payload);

  }
}
