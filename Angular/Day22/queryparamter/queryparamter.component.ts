import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparamter',
  templateUrl: './queryparamter.component.html',
  styleUrls: ['./queryparamter.component.css']
})
export class QueryparamterComponent implements OnInit {

    myjson={
      id:0,
      fname:'',
      status:''
    }
    notifydata:string='';

  constructor(private route:ActivatedRoute,
              private notifyService:NotificationService) { }

  ngOnInit(): void {
    this.getdatafromUrl();
    this.GetNotoficationdata();
  }
  getdatafromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
          this.myjson.id=+param.get("id");
          this.myjson.fname=param.get("fname");
          this.myjson.status=param.get("status");
      })
  }

  GetNotoficationdata(){
      this.notifyService.notification
      .subscribe((data)=>{
        this.notifydata=data;
      })
  }

  onSend(msg:string){
        this.notifyService.sendMessage(msg);
  }

}
