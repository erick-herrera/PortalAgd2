import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicativoComponent } from './applicativo.component';

describe('ApplicativoComponent', () => {
  let component: ApplicativoComponent;
  let fixture: ComponentFixture<ApplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
