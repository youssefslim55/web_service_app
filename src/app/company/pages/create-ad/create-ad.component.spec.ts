import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateADComponent } from './create-ad.component';

describe('CreateADComponent', () => {
  let component: CreateADComponent;
  let fixture: ComponentFixture<CreateADComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateADComponent]
    });
    fixture = TestBed.createComponent(CreateADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
