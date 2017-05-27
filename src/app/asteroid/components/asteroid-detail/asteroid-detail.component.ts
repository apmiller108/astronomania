import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Asteroid } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroid-detail',
  styleUrls: ['asteroid-detail.component.scss'],
  template: `
<div class="box asteroid-detail"
     [class.last-item]="index === 19"
     (click)="viewAsteroid(detail.neo_reference_id)">
  <div class="columns">
    <div class="column is-4">
      <p class="heading">name</p>
      <p>{{ detail.name }}</p>
    </div>
    <div class="column is-3">
      <p class="heading">neo id</p>
      <p>{{ detail.neo_reference_id }}</p>
    </div>
    <div class="column is-3">
      <p class="heading">Est. Diameter Max</p>
      <p>{{ detail.estimated_diameter.miles.estimated_diameter_max }} mi.</p>
    </div>
    <div class="level">
      <span class="level-item tag is-danger"
            *ngIf="detail.is_potentially_hazardous_asteroid">
        Hazardous
      </span>
    </div>
  </div>
</div>
`
})

export class AsteroidDetailComponent {
  @Input() detail: Asteroid;
  @Input() index: number;
  @Output() view: EventEmitter<string> = new EventEmitter();

  viewAsteroid(id: string) {
    this.view.emit(id);
  }
}
