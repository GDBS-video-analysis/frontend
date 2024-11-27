import { Component } from '@angular/core';

@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.css',
  host: {
    class: 'flex *:flex-1',
  },
})
export class TableRowComponent {}
