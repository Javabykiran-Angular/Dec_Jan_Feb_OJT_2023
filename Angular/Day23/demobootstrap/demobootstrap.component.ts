import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

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

}
