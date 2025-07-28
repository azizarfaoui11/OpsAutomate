import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmeterparamsComponent } from './jmeterparams.component';

describe('JmeterparamsComponent', () => {
  let component: JmeterparamsComponent;
  let fixture: ComponentFixture<JmeterparamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JmeterparamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JmeterparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
