import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef  } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    empData:any[]=[];
    isSelect:boolean=false;
    modalRef!: BsModalRef; 
    empobj=<Employee>{};
    p:number=1;

    config = {
      animated: true,
      
      ignoreBackdropClick: true,
      class: "alert alert-danger"
    };

  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private title:Title) { }

  ngOnInit(): void {
      this.GetAllRecord();
      this.title.setTitle("Project | Dashboard");
  }

  GetAllRecord(){
    this.service.getAllRecord()
    .subscribe((response:any)=>{
      console.log(response);
      this.empData=response;
    })
  }


  onEdit(item:any){
    // console.log(item);
    this.isSelect=true;
    this.empobj=item;
  }

  isRadioCheck(){
    if (this.isSelect) {
      return true;
    }else{
      return false;
    }    
  }

  onUpdate(popup: TemplateRef<any>){
      if(this.isRadioCheck()){
        //update a record
        this.modalRef = this.modalservice.show(        
          popup, this.config);
      }else{
        alert("Please Select a Record to Update ");
      }
  }

}
