import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosComponentsComponent } from './carros.component';

describe('CarrosComponentsComponent', () => {
  let component: CarrosComponentsComponent;
  let fixture: ComponentFixture<CarrosComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
