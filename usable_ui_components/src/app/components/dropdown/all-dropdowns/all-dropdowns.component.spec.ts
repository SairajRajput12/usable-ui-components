import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDropdownsComponent } from './all-dropdowns.component';

describe('AllDropdownsComponent', () => {
  let component: AllDropdownsComponent;
  let fixture: ComponentFixture<AllDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDropdownsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
