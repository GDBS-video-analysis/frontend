import { TabComponent } from '@/app/shared/components/common/tab/tab.component';
import { TabsComponent } from '@/app/shared/components/common/tabs/tabs.component';
import { ERoutes } from '@/app/shared/enums/routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabComponent, TabsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  employeesRoute = ERoutes.employees;
  eventsRoute = ERoutes.events;
}
