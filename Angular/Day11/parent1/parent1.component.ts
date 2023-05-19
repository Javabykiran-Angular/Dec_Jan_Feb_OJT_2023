import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  strdata:string="data send from parent....";

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  msg:string='';
  sendDate:string='';

  strdataReceived:string='';
  ArrProdReceived:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.msg="Hopes so u r enjoying Angular 12 Module";
  }

  onSendDate(mydate:string){
    this.sendDate=mydate;
  }

}
