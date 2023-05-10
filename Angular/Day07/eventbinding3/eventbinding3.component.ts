import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log("Change event occur..")
  }

  onKeyup(){
    console.log("Key up event occur...")
  }

  onKeydown(){
    console.log("Key down event occur...")
  }

  onKeyEnter(myvalue:string){
    console.log("Enter key pressed...");
    console.log("===> "+myvalue.length)
  }

}
