import { Component, Input } from '@angular/core';

// Interfaces
import { Asteroid } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroid-view',
  styleUrls: ['asteroid-view.component.scss'],
  template: `
<div class="box">
  <h1 class="title is-1">{{ asteroid.name }}</h1>
  <p class="subtitle is-5">
    Reference ID: {{ asteroid.neo_reference_id }}
  </p>
  <div class="columns">
    <div class="column is-6">
      <div class="box">
        <p class="title is-6">
          Estimated Diameter
        </p>
        <div class="tabs is-left is-boxed">
          <ul>
            <li *ngFor="let unit of distanceUnits"
                (click)="activeDistanceUnit = unit"
                [class.is-active]="activeDistanceUnit === unit">
              <a>{{ unit }}</a>
            </li>
          </ul>
        </div>
        <div *ngFor="let unit of distanceUnits">
          <div class="columns"
               [ngClass]="distanceUnitClasses(unit)"
               *ngIf="activeDistanceUnit === unit">
            <div class="column is-6">
              <p>
                Minimum: {{ asteroid.estimated_diameter[unit].estimated_diameter_min }}
              </p>
            </div>
            <div class="column is-6">
              <p>
                Maximum: {{ asteroid.estimated_diameter[unit].estimated_diameter_max }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
})

export class AsteroidViewComponent {
  distanceUnits: string[] = ['kilometers', 'meters', 'miles', 'feet'];
  activeDistanceUnit: string = 'kilometers';
  @Input() asteroid: Asteroid;

  distanceUnitClasses(unit) {
    return {
      'kilometers': unit === 'kilometers',
      'meters': unit === 'meters',
      'miles': unit === 'miles',
      'feet': unit === 'feet',
    };
  }
}
