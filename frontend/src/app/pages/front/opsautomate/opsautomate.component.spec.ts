import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsautomateComponent } from './opsautomate.component';

describe('OpsautomateComponent', () => {
  let component: OpsautomateComponent;
  let fixture: ComponentFixture<OpsautomateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpsautomateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsautomateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
