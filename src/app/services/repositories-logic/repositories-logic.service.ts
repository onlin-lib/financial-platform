import { Injectable } from '@angular/core';
import { RepositoriesApiService } from '../repositories-api/repositories-api.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RepositoriesLogicService {

  constructor(private repositoriesServiceLogic : RepositoriesApiService) { }

  getData(url){
      return this.repositoriesServiceLogic.getData(url).pipe(map(res => {
        return res;
      }));
  }
}
