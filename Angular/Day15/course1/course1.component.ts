import { Component, OnInit } from '@angular/core';
import { CourseService } from '../utility/course.service';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {

    mycourse1:string[]=[];
  constructor(private service:CourseService) { }

  ngOnInit(): void {
    this.mycourse1=this.service.getCourse();
  }

}
