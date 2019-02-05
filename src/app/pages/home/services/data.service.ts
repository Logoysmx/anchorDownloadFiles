import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { DataInterface } from './models/data.interface';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

	getFiles(): Observable<DataInterface[]> {
		return this.http.get('../assets/data/dataFileService.json')
		.pipe(
			map((res: DataInterface[]) => {
				return res.map(info => {
					const newPath: String[] = info.absolutePath.split("/").slice(-2);
					return {...info, newPath};
				});
		}));
  	}

}
