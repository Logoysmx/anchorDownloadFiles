import { Component, OnInit } from '@angular/core';
import { FileInfo } from './file-info';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dataFiles: FileInfo;
	filesLimit = 10;
	files: any[];

  constructor( public dataService:  DataService) { }

  ngOnInit() {
  	this.dataService.getFiles().subscribe(resp => {
  		this.files = resp.slice(0, this.filesLimit);  		
  	});  	
  }

  showInfo(file: FileInfo) {
  	this.dataFiles = file;
  }

}
