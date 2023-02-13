/*
* File: about.component.spec.ts
* Author: Serényi Ödön
* Copyright: 2023, Serényi Ödön
* Group: Szoft-II-N
* Date: 2023-02-13
* Github: https://github.com/OneBoyTwoGirl/
* Licenc: GNU GPL
*/


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
