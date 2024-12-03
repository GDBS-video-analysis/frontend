import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  isVisible = false;

  constructor() {}

  show() {
    document.body.style.overflow = 'hidden';
    this.isVisible = true;
  }

  hide() {
    document.body.style.overflow = 'auto';
    this.isVisible = false;
  }

  onContainerClick(event: MouseEvent) {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
