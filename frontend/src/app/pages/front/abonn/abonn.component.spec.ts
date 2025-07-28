import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnComponent } from './abonn.component';

describe('AbonnComponent', () => {
  let component: AbonnComponent;
  let fixture: ComponentFixture<AbonnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbonnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
