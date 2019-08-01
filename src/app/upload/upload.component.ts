import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    var x = document.createElement("INPUT");
  x.setAttribute("type", "file");
  
  }

}
