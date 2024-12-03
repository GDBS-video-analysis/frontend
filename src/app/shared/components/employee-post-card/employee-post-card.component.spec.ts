import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePostCardComponent } from './employee-post-card.component';

describe('EmployeePostCardComponent', () => {
  let component: EmployeePostCardComponent;
  let fixture: ComponentFixture<EmployeePostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePostCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeePostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
