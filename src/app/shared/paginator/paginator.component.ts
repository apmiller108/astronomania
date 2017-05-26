import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
<nav class="pagination is-centered">
  <a class="pagination-previous"
      (click)="getPage(currentPage - 1)">
    Previous
  </a>
  <a class="pagination-next"
      (click)="getPage(currentPage + 1)">
    Next
  </a>
  <ul class="pagination-list">
    <li>
      <a class="pagination-link"
          [class.is-current]="currentPage === 0"
          (click)="getPage(0)">
        1
      </a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li *ngFor="let pageNumber of pageNumbers">
      <a class="pagination-link"
          [class.is-current]="currentPage === pageNumber && currentPage !== 0 && currentPage !== totalPages"
          [class.is-disabled]="pageNumber === 0 || pageNumber >= totalPages"
          (click)="getPage(pageNumber)">
        {{ pageNumber + 1 }}
      </a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link"
          [class.is-current]="currentPage === totalPages"
          (click)="getPage(totalPages)">
        {{ totalPages + 1 }}
      </a>
    </li>
  </ul>
</nav>
`
})

export class PaginatorComponent {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() pageNumbers: number[];
  @Output() page: EventEmitter<number> = new EventEmitter();

  getPage(page: number) {
    this.page.emit(page);
  }
}
