import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeeComponent } from './searchemployee.component';

describe('SearchemployeeComponent', () => {
  let component: SearchemployeeComponent;
  let fixture: ComponentFixture<SearchemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
