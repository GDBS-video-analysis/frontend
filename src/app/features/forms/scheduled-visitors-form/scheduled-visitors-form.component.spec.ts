import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledVisitorsFormComponent } from './scheduled-visitors-form.component';

describe('ScheduledVisitorsFormComponent', () => {
  let component: ScheduledVisitorsFormComponent;
  let fixture: ComponentFixture<ScheduledVisitorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledVisitorsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledVisitorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
