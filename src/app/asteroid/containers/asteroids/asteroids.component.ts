import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Asteroids } from '../../models/asteroids.interface';
import { Asteroid } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroids',
  styleUrls: ['asteroids.component.scss'],
  template: `
<div>
  <h1 class="title">Asteroids</h1>
{{ nearEarthObjects | json }}
</div>
`
})

export class AsteroidsComponent implements OnInit {
  asteroids: Asteroids;
  nearEarthObjects: Asteroid[];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((data) => this.asteroids = data.asteroids)

    this.nearEarthObjects = this.asteroids.near_earth_objects;
  }
}
