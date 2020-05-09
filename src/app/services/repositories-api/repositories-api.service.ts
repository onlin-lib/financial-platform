import { Injectable } from '@angular/core';
import {  XhrService } from '../../services/xhr/xhr.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesApiService {

  constructor(private xhr: XhrService) { }

  getData(url ){
    return this.xhr.call(url).pipe(map(res => {
      return res;
    }));
  }
}
