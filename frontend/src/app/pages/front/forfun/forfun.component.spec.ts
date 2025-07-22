import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfunComponent } from './forfun.component';

describe('ForfunComponent', () => {
  let component: ForfunComponent;
  let fixture: ComponentFixture<ForfunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForfunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
