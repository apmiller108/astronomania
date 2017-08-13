import { Component, Input, OnChanges } from '@angular/core';
import { Apod } from '../../models/apod.interface';

@Component({
  selector: 'app-apod',
  styleUrls: ['apod.component.scss'],
  template: `
<div class="container">
  <div class="card apod-card">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          *ngIf="detail.data.attributes?.hdurl"
          [alt]="detail.data.attributes?.title"
          [src]="detail.data.attributes?.url"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h3 class="title">{{ detail.data.attributes?.title }}</h3>
        <p>{{ detail.data.attributes?.explanation }}</p>
        <small>{{ detail.data.attributes?.date }}</small>
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

