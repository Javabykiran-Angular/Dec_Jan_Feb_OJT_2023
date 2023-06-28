import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  OpenConfirmDialog(msg:any){
    return this.dialog.open(MatConfirmDialogComponent,{
       width:'390px',
       panelClass:'confirm-dialog-container', 
     //Panel class is used to allow our customize dialog box to apply css & make it as custom
       disableClose:true,
       position:{top:"35vh"},
       data:{
        message:msg
      }
      
     })
     }

}
