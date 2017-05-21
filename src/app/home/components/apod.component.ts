import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-apod',
  styleUrls: ['apod.component.scss'],
  template: `
<div>
  <img
    *ngIf="detail?.url"
    [alt]="detail?.title"
    [src]="detail?.url"/>
{{ detail | json }}
</div>
`
})

export class ApodComponent implements OnChanges {
  @Input() detail: any;

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
}

