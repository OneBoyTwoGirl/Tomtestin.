/*
* File: calc.component.spec.ts
* Author: Serényi Ödön
* Copyright: 2023, Serényi Ödön
* Group: Szoft-II-N
* Date: 2023-02-13
* Github: https://github.com/OneBoyTwoGirl/
* Licenc: GNU GPL
*/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
