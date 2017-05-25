import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((data) => this.asteroids = data.asteroids)
  }
}
