import { AvatarComponent } from '@/app/shared/components/avatar/avatar.component';
import { IEmployee } from '@/app/shared/interfaces/employee';
import { FullNamePipe } from '@/app/shared/utils/pipes/fullNamePipe';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-post-card',
  standalone: true,
  imports: [AvatarComponent, FullNamePipe],
  templateUrl: './employee-post-card.component.html',
  styleUrl: './employee-post-card.component.css',
})
export class EmployeePostCardComponent {
  @Input() employee!: IEmployee;
}
