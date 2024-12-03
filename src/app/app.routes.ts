import { EmployeesComponent } from '@/app/pages/employees/employees.component';
import { EventComponent } from '@/app/pages/event/event.component';
import { EventsComponent } from '@/app/pages/events/events.component';
import { ERoutes } from '@/app/shared/enums/routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ERoutes.employees,
    component: EmployeesComponent,
  },
  {
    path: ERoutes.events,
    component: EventsComponent,
  },
  {
    path: ERoutes.event,
    component: EventComponent,
  },
];
