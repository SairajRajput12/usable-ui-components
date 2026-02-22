import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialDropdownComponent } from './angular-material-dropdown.component';

describe('AngularMaterialDropdownComponent', () => {
  let component: AngularMaterialDropdownComponent;
  let fixture: ComponentFixture<AngularMaterialDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularMaterialDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
