import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AsteroidObject } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroid-detail',
  styleUrls: ['asteroid-detail.component.scss'],
  template: `
<div class="box asteroid-detail"
     [class.last-item]="index === 19"
     (click)="viewAsteroid(detail.id)">
  <div class="columns">
    <div class="column is-4">
      <p class="heading">name</p>
      <p>{{ detail.attributes.name }}</p>
    </div>
    <div class="column is-3">
      <p class="heading">neo id</p>
      <p>{{ detail.id }}</p>
    </div>
    <div class="column is-3">
      <p class="heading">Est. Diameter Max</p>
      <p>{{ detail.attributes.estimated_diameter.miles.estimated_diameter_max }} mi.</p>
    </div>
    <div class="level">
      <span class="level-item tag is-danger"
            *ngIf="detail.attributes.is_potentially_hazardous_asteroid">
        Hazardous
      </span>
    </div>
  </div>
</div>
`
})

export class AsteroidDetailComponent {
  @Input() detail: AsteroidObject;
  @Input() index: number;
  @Output() view: EventEmitter<string> = new EventEmitter();

  viewAsteroid(id: string) {
    this.view.emit(id);
  }
}
