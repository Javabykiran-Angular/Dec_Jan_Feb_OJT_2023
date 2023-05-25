import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  description:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi beatae numquam sunt eos dolorem unde, totam consequuntur quasi veniam temporibus voluptatem expedita, velit tempora nobis porro quod alias tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi beatae numquam sunt eos dolorem unde, totam consequuntur quasi veniam temporibus voluptatem expedita, velit tempora nobis porro quod alias tenetur?'
  constructor() { }

  ngOnInit(): void {
  }

}
