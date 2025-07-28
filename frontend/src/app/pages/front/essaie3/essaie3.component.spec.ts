import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Essaie3Component } from './essaie3.component';

describe('Essaie3Component', () => {
  let component: Essaie3Component;
  let fixture: ComponentFixture<Essaie3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Essaie3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Essaie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
