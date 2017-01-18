/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuakesComponent } from './quakes.component';

describe('QuakesComponent', () => {
  let component: QuakesComponent;
  let fixture: ComponentFixture<QuakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
