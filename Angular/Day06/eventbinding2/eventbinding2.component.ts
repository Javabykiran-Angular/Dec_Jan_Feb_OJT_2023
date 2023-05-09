import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  res:number=0;
  constructor() { }

  ngOnInit(): void {
  }


  onDollefrevent(myevent:any){
    console.log(myevent)
    console.log(myevent.target.value)
  }

  onClick(myname:any){
    console.log(myname);
    console.log(myname.value);
    myname.style.background="green";
    myname.style.color='white';

  }

  onClick1(myvalue:any){
    console.log(myvalue);
  }


  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;
    
    // this.res=num1+num2;
    this.res=n1+n2;
  }

}
