import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposirtoryComponent } from './reposirtory.component';

describe('ReposirtoryComponent', () => {
  let component: ReposirtoryComponent;
  let fixture: ComponentFixture<ReposirtoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposirtoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposirtoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
