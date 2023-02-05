import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConocomientoComponent } from './base-conocomiento.component';

describe('BaseConocomientoComponent', () => {
  let component: BaseConocomientoComponent;
  let fixture: ComponentFixture<BaseConocomientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseConocomientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConocomientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
