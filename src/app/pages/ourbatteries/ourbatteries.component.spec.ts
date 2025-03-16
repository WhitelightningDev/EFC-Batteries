import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbatteriesComponent } from './ourbatteries.component';

describe('OurbatteriesComponent', () => {
  let component: OurbatteriesComponent;
  let fixture: ComponentFixture<OurbatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurbatteriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurbatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
