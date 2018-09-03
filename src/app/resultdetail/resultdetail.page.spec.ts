import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdetailPage } from './resultdetail.page';

describe('ResultdetailPage', () => {
  let component: ResultdetailPage;
  let fixture: ComponentFixture<ResultdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
