import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakkiebatteriesComponent } from './bakkiebatteries.component';

describe('BakkiebatteriesComponent', () => {
  let component: BakkiebatteriesComponent;
  let fixture: ComponentFixture<BakkiebatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakkiebatteriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakkiebatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
