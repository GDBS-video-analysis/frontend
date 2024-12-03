import { EventsService } from '@/app/entities/events-service/events.service';
import { ButtonComponent } from '@/app/shared/components/common/button/button.component';
import { ModalComponent } from '@/app/shared/components/common/modal/modal.component';
import { EmployeePostCardComponent } from '@/app/shared/components/employee-post-card/employee-post-card.component';
import { CloseIconComponent } from '@/app/shared/components/icons/close-icon/close-icon.component';
import { IEmployee } from '@/app/shared/interfaces/employee';
import { FullNamePipe } from '@/app/shared/utils/pipes/fullNamePipe';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [
    ModalComponent,
    EmployeePostCardComponent,
    CloseIconComponent,
    FullNamePipe,
    ButtonComponent,
  ],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.css',
})
export class VisitorComponent {
  @Input() visitor!: IEmployee;
  @ViewChild('modal') modal: ModalComponent | undefined;
  @Output() onDeleteVisitor = new EventEmitter<string>();

  toggleModal() {
    return () => {
      this.modal?.isVisible ? this.modal?.hide() : this.modal?.show();
    };
  }

  deleteScheduledVisitor(employeeId: string) {
    this.onDeleteVisitor.emit(employeeId);
    this.toggleModal()();
  }
}
