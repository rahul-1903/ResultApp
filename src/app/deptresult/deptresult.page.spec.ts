import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptresultPage } from './deptresult.page';

describe('DeptresultPage', () => {
  let component: DeptresultPage;
  let fixture: ComponentFixture<DeptresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptresultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
