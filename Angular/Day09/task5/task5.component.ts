import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  empdata:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(myid:any,myname:any,mysal:any){
    this.empdata.push({id:myid,name:myname,sal:mysal});
  }

  onRemove(i:any){
    this.empdata.splice(i,1);
  }

}
