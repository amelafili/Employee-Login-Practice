import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { EMPService } from '../services/emp.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  empname: string=  "abc";
  timeIn: number= 4;
  timeOut: number= 12;

  login()
  {
   const user= this.empname;
   const timein= this.timeIn;
   const timeout= this.timeOut;

   console.log("user is: "+user, " Time in is: "+timein, "Time out is: "+timeout);
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
}

export class DatePipeComponent {
  today: number = Date.now
}
