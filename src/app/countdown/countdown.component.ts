import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

   today = new Date();
   newDate = this.today.setDate(this.today.getDate()+10);
   //targetDate = (Date)newDate;
 
  constructor() { }

  ngOnInit() {

  
  }

}
