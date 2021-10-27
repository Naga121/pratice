import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDitectiveComponent } from './custom-ditective.component';

describe('CustomDitectiveComponent', () => {
  let component: CustomDitectiveComponent;
  let fixture: ComponentFixture<CustomDitectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDitectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDitectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
