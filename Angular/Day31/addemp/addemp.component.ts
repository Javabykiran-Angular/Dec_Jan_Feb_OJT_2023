import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  allCountry:any[]=[];
  constructor(private service:HttpService,
    private router:Router) { }

  ngOnInit(): void {
    this.GetAllCountry();
  }

  GetAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        this.allCountry=response;
      })
  }

  onSubmit(f:NgForm){
    
    let obj={
      name:f.value.name,
      phoneno:f.value.phoneno,
      departmentit:f.value.departmentit,
      status:f.value.status,
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
      },
      createddtm:Date.now(),
      createdby:sessionStorage.getItem("username"),
      updateddtm:Date.now(),
      updatedby:sessionStorage.getItem("username")
    }

    this.service.addEmpRecord(obj)
    .subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['/home']);
    })


  }

}
