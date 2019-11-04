import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDetailComponent } from './cats-detail.component';

describe('CatsDetailComponent', () => {
  let component: CatsDetailComponent;
  let fixture: ComponentFixture<CatsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
