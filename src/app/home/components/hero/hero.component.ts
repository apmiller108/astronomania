import { Component } from '@angular/core';
import { Apod } from '../../models/apod.interface';

@Component({
  selector: 'app-hero',
  styleUrls: ['./hero.component.scss'],
  template: `
<section class="hero is-medium is-bold is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Nerd out on cool space stuff</h1>
    </div>
  </div>
</section>
`
})

export class HeroComponent {}
