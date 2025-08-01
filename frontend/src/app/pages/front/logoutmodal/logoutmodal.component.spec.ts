import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutmodalComponent } from './logoutmodal.component';

describe('LogoutmodalComponent', () => {
  let component: LogoutmodalComponent;
  let fixture: ComponentFixture<LogoutmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
