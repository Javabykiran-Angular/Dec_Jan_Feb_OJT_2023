import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() ParentStrData:string='';

  @Input() ParentJsonData:any={};
  @Input() ParentMsgData!:string;

  @Input() ParentDateData:string='';

  @Output() ChildStrEvent=new EventEmitter();

  @Output() ChildArrEvent=new EventEmitter();

    strMsg:string='Data send from child to parent';

    arrProduct=[
      {
        name:'Motorolla',
        price:30000,
        qty:1
      },
      {
        name:'OnePlus',
        price:45000,
        qty:1
      },
      {
        name:'RealMe',
        price:18000,
        qty:2
      },
      {
        name:'Samsung',
        price:22000,
        qty:3
      }
    ];


  constructor() { }

  ngOnInit(): void {

  }

  onSend(){
    this.ChildStrEvent.emit(this.strMsg);
    this.ChildArrEvent.emit(this.arrProduct);
  }

}
