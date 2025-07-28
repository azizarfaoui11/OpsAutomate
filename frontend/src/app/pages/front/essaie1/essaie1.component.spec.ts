import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Essaie1Component } from './essaie1.component';

describe('Essaie1Component', () => {
  let component: Essaie1Component;
  let fixture: ComponentFixture<Essaie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Essaie1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Essaie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
