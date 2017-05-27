import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { Asteroid } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroid-viewer',
  template: `
<div class="page-content">
  <h1 class="title">{{ asteroid.name }}</h1>
</div>
<div>
  {{ asteroid | json }}
</div>
`
})

export class AsteroidViewerComponent implements OnInit {
  asteroid: Asteroid;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data) => this.asteroid = data.asteroid);

  }
}
