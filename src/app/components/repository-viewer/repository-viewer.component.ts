import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository-viewer',
  templateUrl: './repository-viewer.component.html',
  styleUrls: ['./repository-viewer.component.scss']
})
export class RepositoryViewerComponent implements OnInit {
  @Input() repositoryDetails;
  constructor() { }

  ngOnInit() {
  }

}
