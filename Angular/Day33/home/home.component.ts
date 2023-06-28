import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef  } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';
import { Title } from '@angular/platform-browser';
import { DialogService } from '../dialog.service';

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
    private title:Title,
    private dialogservice:DialogService) { }

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

  onDelete(){
    if(this.isRadioCheck()){
      //delete a record
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        // console.log(res)
        if(res){
          //delete a record
          this.service.DeleteRecord(this.empobj.id)
          .subscribe((response:any)=>{
            console.log(response)
            this.GetAllRecord();
          })
        }else{

        }
      })
    }else{
      alert("Please Select a Record to delete")
    }
  }

}
