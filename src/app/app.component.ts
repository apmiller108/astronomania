import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
<app-nav
  [title]="title">
</app-nav>
<router-outlet></router-outlet>
<app-footer></app-footer>
`
})

export class AppComponent implements OnInit {
  title: string;

  constructor( public titleService: Title) {}

  ngOnInit () {
    this.title = 'Astronomania';
    this.titleService.setTitle(this.title);
  }
}
