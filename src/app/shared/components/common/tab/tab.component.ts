import { NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
  host: {
    class: 'w-fit block',
  },
})
export class TabComponent {
  @Input() to: string = '';
  isActive = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isActive = this.router.url.includes(this.to); // Получаем текущий URL
      });
  }
}
