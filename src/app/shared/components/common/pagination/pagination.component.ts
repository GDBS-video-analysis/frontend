import { EPaginationDefaultValues } from '@/app/shared/enums/constants/pagination';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaginationComponent),
      multi: true,
    },
  ],
})
export class PaginationComponent implements OnInit, ControlValueAccessor {
  private _currentPage = 1;
  @Input()
  set currentPage(value: number) {
    this.onChange(value);
    this._currentPage = value;
  }
  @Input() count!: number;

  get currentPage() {
    return this._currentPage;
  }

  lastPage = 0;

  showFirstPage = false;
  showLastPage = false;

  pages: number[] = [];

  onChange: (value: number) => void = () => {};

  moveForward() {
    this.fillPagesArray(
      this.pages[0] + EPaginationDefaultValues.DISPLAYED_PAGE_COUNT
    );
  }

  moveBack() {
    this.fillPagesArray(
      this.pages[0] - EPaginationDefaultValues.DISPLAYED_PAGE_COUNT
    );
  }

  ngOnInit(): void {
    this.lastPage = Math.floor(this.count / EPaginationDefaultValues.PAGE_SIZE);
    this.fillPagesArray(this.currentPage);
  }

  onPageClick(page: number) {
    this.currentPage = page;
    this.fillPagesArray(page);
  }

  writeValue(value: number) {
    this.currentPage = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched() {}

  private fillPagesArray(page: number) {
    this.pages = [];
    let position = page % EPaginationDefaultValues.DISPLAYED_PAGE_COUNT;
    if (position == 0) position = EPaginationDefaultValues.DISPLAYED_PAGE_COUNT;
    for (let i = position; i > 0; i--) {
      this.pages.push(page - i + 1);
    }

    let end =
      this.pages[0] + (EPaginationDefaultValues.DISPLAYED_PAGE_COUNT - 1);
    if (end > this.lastPage) end = this.lastPage;
    end = end % EPaginationDefaultValues.DISPLAYED_PAGE_COUNT;
    if (end == 0) end = EPaginationDefaultValues.DISPLAYED_PAGE_COUNT;
    for (let i = position; i < end; i++) {
      this.pages.push(page + (i - position) + 1);
    }

    if (this.pages.at(-1)! - this.lastPage == 1) this.pages.push(this.lastPage);
    this.showFirstPage = this.pages[0] !== 1;
    this.showLastPage = this.pages.at(-1) !== this.lastPage;
  }
}
