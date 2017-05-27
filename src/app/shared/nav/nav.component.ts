import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
<div class="nav has-shadow">
  <div class="nav-left">
    <a class="nav-item" routerLink="/home">
      <i class="fa fa-rocket fa-3x"></i>
      <span> {{ title }}</span>
    </a>
  </div>
  <div class="nav-center">
    <a class="nav-item is-tab"
       routerLink="/asteroids"
       routerLinkActive="is-active">
      asteroids
    </a>
    <a class="nav-item is-tab">
      mars rover
    </a>
    <a class="nav-item is-tab">
      NASA images and videos
    </a>
  </div>
  <div class="nav-right">
    <a class="nav-item">sign in</a>
  </div>
</div>
`
})

export class NavComponent {
  @Input() title: string;
}
