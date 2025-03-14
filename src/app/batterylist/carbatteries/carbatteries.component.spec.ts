import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbatteriesComponent } from './carbatteries.component';

describe('CarbatteriesComponent', () => {
  let component: CarbatteriesComponent;
  let fixture: ComponentFixture<CarbatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbatteriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
