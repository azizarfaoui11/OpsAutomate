import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelenuimparamsComponent } from './selenuimparams.component';

describe('SelenuimparamsComponent', () => {
  let component: SelenuimparamsComponent;
  let fixture: ComponentFixture<SelenuimparamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelenuimparamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelenuimparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
