import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  standalone: true,
  imports: [],
  templateUrl: './close-icon.component.html',
  styleUrl: './close-icon.component.css',
})
export class CloseIconComponent {
  @Input() class?: string | undefined;
  @Input() click?: () => void;

  handleClick() {
    if (this.click) this.click();
  }
}
