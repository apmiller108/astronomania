import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  template: `
<div>
  <h1 class="title is-2">Home</h1>
</div>
<app-apod
  [detail]="apod">
</app-apod>
`
})

export class HomeComponent implements OnInit {
  apod: any;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService
      .getApod()
      .subscribe((data: any) => this.apod = data)
  }
}
