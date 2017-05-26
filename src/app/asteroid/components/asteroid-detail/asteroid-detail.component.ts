import { Component, Input } from '@angular/core';

import { Asteroid } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroid-detail',
  styleUrls: ['asteroid-detail.component.scss'],
  template: `
<div class="box asteroid-detail"
     [class.last-item]="index === 19">
  <div class="columns">
    <div class="column is-4">
      <a>{{ detail.name }}</a>
    </div>
    <div class="column is-3">
      {{ detail.orbital_data.orbital_period }}
    </div>
    <div class="column is-3">
      {{ detail.estimated_diameter.miles.estimated_diameter_max }}
    </div>
    <div class="column is-3">
      <span class="tag is-danger"
            *ngIf="detail.is_potentially_hazardous_asteroid">
        Potentially Hazardous
      </span>
    </div>
  </div>
</div>
`
})

export class AsteroidDetailComponent {
  @Input() detail: Asteroid;
  @Input() index: number;
}
