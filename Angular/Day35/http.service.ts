import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseUrl:string='http://localhost:8080/api/';
  baseUrl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

  login(obj:any){
    return (this.http.post(`${this.baseUrl}login`,obj));
  }

  getAllRecord(){
    return (this.http.get(`${this.baseUrl}getallemployee`));
  }
  getRecordById(id:any){
    return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  addEmpRecord(obj:any){
   return ( this.http.post(`${this.baseUrl}addemployee`,obj,{
      responseType:'text'
    }));
  }

  UpdateRecord(obj:any){
    return (this.http.put(`${this.baseUrl}updateemployee`,obj,{
      responseType:'text'
    }));
  }

  DeleteRecord(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{responseType:'text'}));
  }

}
