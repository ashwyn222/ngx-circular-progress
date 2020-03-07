import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCircularProgressComponent } from './ngx-circular-progress.component';

describe('NgxCircularProgressComponent', () => {
  let component: NgxCircularProgressComponent;
  let fixture: ComponentFixture<NgxCircularProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCircularProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCircularProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
