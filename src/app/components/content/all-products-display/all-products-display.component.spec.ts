import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsDisplayComponent } from './all-products-display.component';

describe('AllProductsDisplayComponent', () => {
  let component: AllProductsDisplayComponent;
  let fixture: ComponentFixture<AllProductsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
