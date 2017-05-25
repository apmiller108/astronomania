import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { AsteroidsResponse } from '../../models/asteroids-response.interface';
import { Asteroid } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroids',
  styleUrls: ['asteroids.component.scss'],
  template: `
<div class="container">
  <h1 class="title">Asteroids</h1>
  <div class="container asteroid-list">
    <app-asteroid-detail
      *ngFor="let asteroid of asteroids"
      [detail]="asteroid">
    </app-asteroid-detail>
  </div>
</div>
`
})

export class AsteroidsComponent implements OnInit {
  asteroidsResponse: AsteroidsResponse;
  asteroids: Asteroid[];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((data) => this.asteroidsResponse = data.asteroidsResponse)

    this.asteroids = this.asteroidsResponse.near_earth_objects;
  }
}
