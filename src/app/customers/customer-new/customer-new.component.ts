import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RepDialogComponent } from '../customer-new/rep-dialog/rep-dialog.component';



@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.sass']
})
export class CustomerNewComponent implements OnInit {

  emailFormControl: FormControl;
  dialogRef: any;

  constructor(public dialog: MatDialog, public _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  openRepDialog() {

    let dialogRef = this.dialog.open(RepDialogComponent, {
      height: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);

    });
    
  }
  onNoClick(){
    this.dialog.ngOnDestroy()
}
  snakBarOpen(){
    this._snackBar.open('Customer Saved', 'UNDONE',{
      duration: 3000,
      
    });
  }

}