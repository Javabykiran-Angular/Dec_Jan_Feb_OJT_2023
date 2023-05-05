import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string='Sumit Raokhande';
  imgUrl:string='../../assets/bg4.jpg';
  isHidden:boolean=false;
  colspanCount:number=2;
  constructor() { }

  ngOnInit(): void {
  }

}
