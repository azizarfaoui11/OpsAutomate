import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubscComponent } from './updatesubsc.component';

describe('UpdatesubscComponent', () => {
  let component: UpdatesubscComponent;
  let fixture: ComponentFixture<UpdatesubscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesubscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesubscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
