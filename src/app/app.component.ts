import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
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

export class AppComponent implements OnInit {
  title: string;

  constructor( public titleService: Title) {}

  ngOnInit () {
    this.title = 'NASA Nerd';
    this.titleService.setTitle(this.title);
  }
}
