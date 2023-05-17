import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core Java",'Advanced Java','Spring Boot','JSP','Angular 12','AWS','Jenkings','Docker'];

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

  country=[
    {
      cid:1,
      cname:'India'
    },
    {
      cid:2,
      cname:'US'
    },
    {
      cid:3,
      cname:'Japan'
    },
    {
      cid:4,
      cname:'SouthAfrica'
    },
    {
      cid:5,
      cname:'China'
    }
  ];

  selected:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    // console.log("Mouse over event occur....")

    console.log(item);
    this.selected=item.name;

  }

  onMouseOut(){
    console.log("=== Mouse Out Event ====");
    this.selected='';
  }

}
