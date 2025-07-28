import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmeterSelenComponent } from './jmeter-selen.component';

describe('JmeterSelenComponent', () => {
  let component: JmeterSelenComponent;
  let fixture: ComponentFixture<JmeterSelenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JmeterSelenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JmeterSelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
