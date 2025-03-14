import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckbatteriesComponent } from './truckbatteries.component';

describe('TruckbatteriesComponent', () => {
  let component: TruckbatteriesComponent;
  let fixture: ComponentFixture<TruckbatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckbatteriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckbatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
