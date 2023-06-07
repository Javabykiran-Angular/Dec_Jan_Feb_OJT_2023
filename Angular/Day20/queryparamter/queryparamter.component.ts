import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparamter',
  templateUrl: './queryparamter.component.html',
  styleUrls: ['./queryparamter.component.css']
})
export class QueryparamterComponent implements OnInit {

    myjson={
      id:0,
      fname:'',
      status:''
    }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getdatafromUrl();
  }
  getdatafromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
          this.myjson.id=+param.get("id");
          this.myjson.fname=param.get("fname");
          this.myjson.status=param.get("status");
      })
  }

}
