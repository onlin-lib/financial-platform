import { Component, OnInit } from '@angular/core';
import { RepositoriesLogicService } from 'src/app/services/repositories-logic/repositories-logic.service';
@Component({
  selector: 'app-reposirtory',
  templateUrl: './reposirtory.component.html',
  styleUrls: ['./reposirtory.component.scss']
})
export class ReposirtoryComponent implements OnInit {
  owner;
  constructor(private repositoriesService : RepositoriesLogicService) { }

  ngOnInit() {
    this.getRepositories();
  }

  //get repo owner 
  getRepositories(){
    this.repositoriesService.getData('users/octocat' ).subscribe(res => {
      console.log(res);
      this.owner = res;
    })
  }

}
