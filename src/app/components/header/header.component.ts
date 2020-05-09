import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  @Input() ownerDetails ;
  constructor() { }

  ngOnInit() {
  }

  showResponsiveMenu(){
    this.showMenu = !this.showMenu;
  }
}
