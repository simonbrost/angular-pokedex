import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargerCardComponent } from './larger-card.component';

describe('LargerCardComponent', () => {
  let component: LargerCardComponent;
  let fixture: ComponentFixture<LargerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
