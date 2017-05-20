import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss']
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
`
})
export class AppComponent implements OnInit{
  title: string;

  constructor( public titleService: Title) {}

  ngOnInit () {
    this.title = 'NASA Nerd';
    this.titleService.setTitle(this.title);
  }
}
