import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    empData:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.GetAllRecord();
  }

  GetAllRecord(){
    this.service.getAllRecord()
    .subscribe((response:any)=>{
      console.log(response);
      this.empData=response;
    })
  }

}
