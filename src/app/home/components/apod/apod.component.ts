import { Component, Input, OnChanges } from '@angular/core';
import { Apod } from '../../models/apod.interface';

@Component({
  selector: 'app-apod',
  styleUrls: ['apod.component.scss'],
  template: `
<div class="container">
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          *ngIf="detail?.hdurl"
          [alt]="detail?.title"
          [src]="detail?.url"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h3 class="title">{{ detail?.title }}</h3>
        <p>{{ detail?.explanation }}</p>
        <small>{{ detail?.date }}</small>
      </div>
    </div>
  </div>
</div>
`
})

export class ApodComponent implements OnChanges {
  @Input() detail: Apod;

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
}

