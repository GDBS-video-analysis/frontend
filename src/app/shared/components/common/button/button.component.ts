import { IButtonType } from '@/app/shared/components/common/button/interface';
import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Host,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';

type ButtonVariants = VariantProps<typeof button>;

const button = cva(['font-medium block w-fit align-middle'], {
  variants: {
    intent: {
      filled: 'text-default-white bg-primary-90 hover:bg-primary-60',
      outline: 'border border-gray-30 bg-default-white text-primary-90',
      danger: 'bg-default-alert text-default-white',
      link: 'hover:underline text-primary-90 decoration-primary-90',
    },
    size: {
      large: 'text-[20px] h-14',
      medium: 'h-12 text-base',
      small: 'text-sm h-10',
    },
  },
  defaultVariants: {
    intent: 'filled',
    size: 'large',
  },
});

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() class: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() variant: ButtonVariants['intent'];
  @Input() size: ButtonVariants['size'];
  @Input() srartIcon: string | undefined;
  @Input() endIcon: string | undefined;
  @Input() type: IButtonType;
  @Output() handleClick = new EventEmitter<MouseEvent>();

  onClickButton(event: MouseEvent) {
    this.handleClick.emit(event);
  }

  @HostBinding('class')
  get _getButtonVarinats() {
    return button({ size: this.size, intent: this.variant });
  }
}
