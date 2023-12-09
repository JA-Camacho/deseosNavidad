import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClouDeseosComponent } from './clou-deseos.component';

describe('ClouDeseosComponent', () => {
  let component: ClouDeseosComponent;
  let fixture: ComponentFixture<ClouDeseosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClouDeseosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClouDeseosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
