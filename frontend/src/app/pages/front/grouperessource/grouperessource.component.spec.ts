import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouperessourceComponent } from './grouperessource.component';

describe('GrouperessourceComponent', () => {
  let component: GrouperessourceComponent;
  let fixture: ComponentFixture<GrouperessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrouperessourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrouperessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
