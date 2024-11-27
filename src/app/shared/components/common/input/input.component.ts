import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() startIcon: string | undefined;
  @Input() placeholder: string = '';

  private _value: string = '';

  // Хранит функцию обратного вызова для обновления значения
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Записывает входное значение
  writeValue(value: string): void {
    this._value = value;
  }

  // Регистрирует функцию обратного вызова для обновления значения
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Регистрирует функцию обратного вызова для отслеживания касаний
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Обработчик ввода
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._value = input.value;
    this.onChange(this._value); // уведомляем об изменении значения
  }

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }
}
