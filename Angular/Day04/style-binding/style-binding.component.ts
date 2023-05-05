import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=21;

  jsonObj={
    color:'blue',
    fontFamily:'fantasy',
    "font-size" :"32px"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
