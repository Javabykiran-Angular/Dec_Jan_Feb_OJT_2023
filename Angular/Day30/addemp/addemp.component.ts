import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  allCountry:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    
  }

}
