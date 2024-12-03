import { ITextFiledTypeProps } from '@/app/shared/components/common/text-field/interfaces';
import { NgClass, NgIf } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
  ],
})
export class TextFieldComponent implements ControlValueAccessor {
  @Input() invalid: boolean = false;
  @Input() error: string = '';
  @Input() helperText: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: ITextFiledTypeProps;
  disabled = false;

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

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }
}
