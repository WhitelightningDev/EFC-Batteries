import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreebatterycheckComponent } from './freebatterycheck.component';

describe('FreebatterycheckComponent', () => {
  let component: FreebatterycheckComponent;
  let fixture: ComponentFixture<FreebatterycheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreebatterycheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreebatterycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
