import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Essaie2Component } from './essaie2.component';

describe('Essaie2Component', () => {
  let component: Essaie2Component;
  let fixture: ComponentFixture<Essaie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Essaie2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Essaie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
