import { Component, OnInit } from '@angular/core';


import { FileInfo } from './file-info';

//El servicio que solo se encarga de enviar el array de objectos disponibles
import { DataService } from './services/data.service';

//Una manera de mantener valores y usarlos en los componentes que lo requieran
import { Environment } from '../../globals';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dataFiles: FileInfo;
	filesLimit = 2;
	files: any[];
  private baseApiUrlDownload = Environment.BASE_API_URL + Environment.UPLOAD_BASE_FOLDER;

  constructor( public dataService:  DataService) { }

  ngOnInit() {
  	this.dataService.getFiles().subscribe(resp => {
  		this.files = resp.slice(0, this.filesLimit);  		
      // this.files = resp;      
      console.log(this.files);
  	});  	
  }

  showInfo(file: FileInfo) {
  	this.dataFiles = file;
  }

}
