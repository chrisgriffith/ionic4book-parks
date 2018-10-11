import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkMapPage } from './park-map.page';

describe('ParkMapPage', () => {
  let component: ParkMapPage;
  let fixture: ComponentFixture<ParkMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
