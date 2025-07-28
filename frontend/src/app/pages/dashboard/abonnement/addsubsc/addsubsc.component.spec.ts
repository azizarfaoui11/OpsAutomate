import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubscComponent } from './addsubsc.component';

describe('AddsubscComponent', () => {
  let component: AddsubscComponent;
  let fixture: ComponentFixture<AddsubscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsubscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddsubscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
