import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import {RepositoriesLogicService } from '../../services/repositories-logic/repositories-logic.service';
@Component({
  selector: 'app-repository-tab',
  templateUrl: './repository-tab.component.html',
  styleUrls: ['./repository-tab.component.scss']
})
export class RepositoryTabComponent implements OnInit {
  typeOption=[
    {
      title : 'All',
      isSelected: true
    },
    {
      title : 'Private',
      isSelected: false
    },
    {
      title : 'public',
      isSelected: false
    },
    {
      title : 'secured',
      isSelected: false
    }];
  langOptions = [
    {
      title : 'All',
      isSelected: true
    }
  ]
  repositoriesList = [] ;
  searchList = [] ;
  constructor(private repositoriesLogic : RepositoriesLogicService) { }

  ngOnInit() {
    this.getRepositories();
  }

  getRepositories(){
    this.repositoriesLogic.getData('orgs/octokit/repos' ).subscribe(res => {
      console.log(res);
      this.repositoriesList = res;
      this.searchList = res;
    })
  }

  searchrepositories(event){
    this.searchList = [] ;
    if(event !== ''){
      this.repositoriesList.map(repo => {
        if(repo.name.includes(event.target.value)){
          this.searchList.push(repo);
        }
      })
    } else {
      this.searchList = this.repositoriesList;
    }
  }
}
