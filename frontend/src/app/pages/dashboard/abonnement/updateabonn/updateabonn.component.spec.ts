import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateabonnComponent } from './updateabonn.component';

describe('UpdateabonnComponent', () => {
  let component: UpdateabonnComponent;
  let fixture: ComponentFixture<UpdateabonnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateabonnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateabonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
