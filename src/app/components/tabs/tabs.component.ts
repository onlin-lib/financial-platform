import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs = [
    {
      tabName : 'Overview',
      compoentUrl : 'repositories/empty-state'
    },
    {
      tabName : 'respositories',
      compoentUrl : 'repositories/repository-tab'
    },
    {
      tabName : 'Projects',
      compoentUrl : 'repositories/empty-state'
    },
    {
      tabName : 'Packages',
      compoentUrl : 'repositories/empty-state'
    },
    {
      tabName : 'Stars',
      compoentUrl : 'repositories/empty-state'
    },
    {
      tabName : 'Followers',
      compoentUrl : 'repositories/empty-state'
    },
    {
      tabName : 'Following',
      compoentUrl : 'repositories/empty-state'
    }
  ]
  activeTab = {
    name : 'respositories',
    url : 'repositories/repository-tab'
  }
  constructor(private router : Router) { }

  ngOnInit() {
   // this.router.navigate([this.activeTab.url]);
  }

  changeTab(tab){
    this.activeTab.name = tab.tabName;
    this.activeTab.url = tab.compoentUrl;
    this.router.navigate([this.activeTab.url]);
  }
}
