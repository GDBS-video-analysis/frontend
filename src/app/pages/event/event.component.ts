import { EventsService } from '@/app/entities/events-service/events.service';
import { TextFieldComponent } from '@/app/shared/components/common/text-field/text-field.component';
import { ERouteParameters } from '@/app/shared/enums/constants/route-params';
import { IEvent, IUpdateEventForm } from '@/app/shared/interfaces/event';
import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../shared/components/common/button/button.component';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalComponent } from '@/app/shared/components/common/modal/modal.component';
import { ScheduledVisitorsFormComponent } from '@/app/features/forms/scheduled-visitors-form/scheduled-visitors-form.component';
import { EmployeePostCardComponent } from '@/app/shared/components/employee-post-card/employee-post-card.component';
import { CloseIconComponent } from '@/app/shared/components/icons/close-icon/close-icon.component';
import {
  getDateAndTimeFromSting,
  getStringFromDateAndTime,
} from '@/app/shared/utils/scripts/dateTime';
import { VisitorComponent } from '@/app/pages/event/visitor/visitor.component';
import { ERoutes } from '@/app/shared/enums/routes';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    TextFieldComponent,
    NgIf,
    ButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    ModalComponent,
    ScheduledVisitorsFormComponent,
    NgFor,
    VisitorComponent,
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent implements OnInit {
  @ViewChild('addVisitorsModal') addVisitorsModal: ModalComponent | undefined;
  @ViewChild('deleteEventModal') deleteEventModal: ModalComponent | undefined;
  event: IEvent | undefined = undefined;
  updateEventForm!: IUpdateEventForm;
  updateEventFormDisabled = true;

  private eventId!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private eventsService: EventsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    activateRoute.params.subscribe(
      (params) => (this.eventId = params[ERouteParameters.EVENT_ID])
    );
  }

  ngOnInit(): void {
    this.eventsService.event$.subscribe((data) => {
      this.event = data;
      this.setFormValue(this.event);
    });
    this.getEvent();
  }

  enable() {
    this.updateEventFormDisabled = false;
    for (let key in this.updateEventForm.controls) {
      this.updateEventForm.get(key)?.enable();
    }
  }

  disable() {
    this.updateEventFormDisabled = true;
    for (let key in this.updateEventForm.controls) {
      this.updateEventForm.get(key)?.disable();
    }
  }

  showAddVisitorsModal() {
    this.addVisitorsModal?.show();
  }

  getEvent() {
    this.eventsService.getEvent(this.eventId);
  }

  addScheduledVisitors(employeeIds: string[]) {
    this.addVisitorsModal?.hide();
    this.eventsService.addScheduledVisitors(employeeIds);
    this.getEvent();
  }

  deleteScheduledVisitor(employeeId: string) {
    this.eventsService.deleteScheduledVisitor(employeeId);
    this.getEvent();
  }

  setFormValue(data: IEvent) {
    const date = data.date_time
      ? getDateAndTimeFromSting(data.date_time)
      : undefined;
    this.updateEventForm = this.fb.group({
      event_id: new FormControl<string>(data.event_id, [Validators.required]),
      name: new FormControl<string>({ value: data.name, disabled: true }, [
        Validators.required,
      ]),
      description: new FormControl<string>(
        {
          value: data.description ?? '',
          disabled: true,
        },
        [Validators.required]
      ),
      date: new FormControl<string>(
        {
          value: date ? date.date : '',
          disabled: true,
        },
        [Validators.required]
      ),
      time: new FormControl<string>(
        {
          value: date ? date.time : '',
          disabled: true,
        },
        [Validators.required]
      ),
    });
  }

  handleSubmit() {
    const data = this.updateEventForm.getRawValue();
    console.log(data, this.updateEventForm.invalid);
    if (this.updateEventForm.invalid) return;
    this.eventsService.updateEvent({
      event_id: data.event_id!,
      name: data.name!,
      date_time: getStringFromDateAndTime(data.date!, data.time!),
      description: data.description!,
    });
    this.disable();
    this.getEvent();
  }

  handleCancel() {
    this.event && this.setFormValue(this.event);
    this.disable();
  }

  toggleDeleteEventModal() {
    this.deleteEventModal?.isVisible
      ? this.deleteEventModal.hide()
      : this.deleteEventModal?.show();
  }

  deleteEvent() {
    this.eventsService.deleteEvent(this.eventId);
    this.router.navigate([ERoutes.events]);
  }
}
