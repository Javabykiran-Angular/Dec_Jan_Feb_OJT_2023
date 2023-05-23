import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  username:string="Default value";
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onAlert(){
    alert("Hi Welcome "+this.username);
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }


}
