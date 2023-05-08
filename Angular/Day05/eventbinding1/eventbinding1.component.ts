import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  count:number=0;
  commonclass:string='img1';
  isCommon:boolean=true;
  isError:boolean=true;


  jsonObj={
    "commonclass":this.isCommon,
    "img1" : this.isError,
    "img2": !this.isError
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    
    if(this.count==0){
  console.log("Click Event Occur...")
  this.count++;
    }
    
  }

  onImage(){
    console.log("on Image click")
    this.commonclass='img2'
    this.isError=false;
      this.jsonObj={
    "commonclass":this.isCommon,
    "img1" : this.isError,
    "img2": !this.isError
     }
  }

}
