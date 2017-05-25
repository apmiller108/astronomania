import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../../services/asteroid.service';

@Component({
  selector: 'app-asteroids',
  styleUrls: ['asteroids.component.scss'],
  template: `
<div>
  <h1 class="title">Asteroids</h1>
{{ asteroids | json }}
</div>
`
})

export class AsteroidsComponent implements OnInit {
  asteroids: any[];
  constructor(private asteroidService: AsteroidService) {}

  ngOnInit() {
    this.asteroidService
      .getAsteroids()
      .subscribe((data: any[]) => this.asteroids = data)
  }
}
