import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkListPage } from './park-list.page';

describe('ParkListPage', () => {
  let component: ParkListPage;
  let fixture: ComponentFixture<ParkListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
