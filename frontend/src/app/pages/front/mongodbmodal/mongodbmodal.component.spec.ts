import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbmodalComponent } from './mongodbmodal.component';

describe('MongodbmodalComponent', () => {
  let component: MongodbmodalComponent;
  let fixture: ComponentFixture<MongodbmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MongodbmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MongodbmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
