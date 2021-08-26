import { DisplayComponent } from './../display/display.component';

import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  isbn:string[]=["5725-670-78-0","1238-987-34-0"];
  bookTitle:any[]=["Java Programming for Beginners ","Professional JavaScript"];
  authorPrice:number[]=[301.9,237.2];
  viewMode='';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

 

  openDialog(){
    this.dialog.open(DisplayComponent);
  }

}

