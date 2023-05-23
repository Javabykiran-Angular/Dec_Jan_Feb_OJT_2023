import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit,AfterViewInit {

  @ViewChild('mydiv') MyDiv!:ElementRef;

  @ViewChild(Child2Component) ChildAccess!:Child2Component;
  
  

  constructor() { }
  

  ngOnInit(): void {
    console.log(this.MyDiv);
  }

  ngAfterViewInit(): void {
    console.log(this.MyDiv);
   

    // this.MyDiv.nativeElement.className='divClass';

    this.MyDiv.nativeElement.style.background='green';
    this.MyDiv.nativeElement.style.color='white';

  }

  onPropertyAccess(){
    this.ChildAccess.username='Sumit Raokhane';
  }

  onMethodAccess(){
    this.ChildAccess.onAlert();
  }

  onIncrement(){
    this.ChildAccess.increment();
  }

  onDecrement(){
    this.ChildAccess.decrement();
  }

}
