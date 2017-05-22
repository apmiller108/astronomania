import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
<div class="nav">
  <div class="nav-left">
    <div class="nav-item">
      <i class="fa fa-rocket fa-3x"></i>
    </div>
    <div class="nav-item">
      <h1 class="title is-1">{{ title }}</h1>
    </div>
  </div>
</div>
`
})

export class NavComponent {
  @Input() title: string;
}
