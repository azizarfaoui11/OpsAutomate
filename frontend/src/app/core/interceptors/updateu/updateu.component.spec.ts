import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuComponent } from './updateu.component';

describe('UpdateuComponent', () => {
  let component: UpdateuComponent;
  let fixture: ComponentFixture<UpdateuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
