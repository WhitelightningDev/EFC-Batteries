import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikebatteriesComponent } from './bikebatteries.component';

describe('BikebatteriesComponent', () => {
  let component: BikebatteriesComponent;
  let fixture: ComponentFixture<BikebatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikebatteriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikebatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
