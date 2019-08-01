import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  empname : string;
  timein : number;
  timeout: number;

  login()
  {
   const user= this.empname;
   const timein= this.timein;
   const timeout= this.timeout;
  }

  constructor() { }

  ngOnInit() {
  }

}
