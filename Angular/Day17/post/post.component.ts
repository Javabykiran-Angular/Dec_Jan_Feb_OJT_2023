import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:number=0;
  title!:string;
  body!:string;
  isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {

    this.getPosts();

  }

  getPosts(){
    this.service.getPost()
    .subscribe((response:any)=>{
     // console.log(response);
      this.posts=response;
    },(myerror)=>{
      // alert("Error Occured");

      if(myerror.status>=400 && myerror.status<=499){
        
        alert("Client side Error`");
      }else if(myerror.status>=500 && myerror.status<=599){
      alert("Server side Error`");
      }else {
        alert("Something is Occur");
      }
    })
  }

  onSend(myTitle:any,myBody:any){
    let obj={
      title:myTitle,
      myBody:myBody
    }

    this.service.Postdata(obj)
    .subscribe((response)=>{
        console.log(response);
    })

  }

  onEdit(item:any){
      console.log(item)
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHidden=false;
  }

  onUpdate(){
    let jsonObj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(jsonObj)
    .subscribe((response)=>{
      console.log(response);
      this.isHidden=true;
    })

    
  }

  onDelete(id:any){
      this.service.Deletedata(id)
      .subscribe((response)=>{
        console.log(response);
      })
  }

}
