import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  datareceived:string='';

  constructor(private serviceNotify:NotificationService) { }

  ngOnInit(): void {
      this.GetNotification();
  }

  GetNotification(){
      this.serviceNotify.notification
      .subscribe((data)=>{
          this.datareceived=data;
      })
  }



}
