import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  imgUrl:string='../../assets/bg4.jpg';

  num:number=4;


  constructor() { }

  ngOnInit(): void {
    
  }

  getName():string{
    return (this.name);
  }


}
