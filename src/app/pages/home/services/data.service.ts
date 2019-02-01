import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

	getFiles(): Observable<any> {
		return this.http.get('../assets/data/dataFileService.json')
		.pipe(
			map(res => {
			console.log(res.description);
			return res;
		}));
  	}

}
