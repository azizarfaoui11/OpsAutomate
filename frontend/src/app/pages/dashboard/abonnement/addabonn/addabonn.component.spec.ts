import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddabonnComponent } from './addabonn.component';

describe('AddabonnComponent', () => {
  let component: AddabonnComponent;
  let fixture: ComponentFixture<AddabonnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddabonnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddabonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
