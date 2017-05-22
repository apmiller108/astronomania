import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';
import { Apod } from '../models/apod.interface';

@Component({
  selector: 'app-home',
  template: `
<app-hero></app-hero>
<app-apod
  [detail]="apod">
</app-apod>
`
})

export class HomeComponent implements OnInit {
  apod: Apod;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService
      .getApod()
      .subscribe((data: Apod) => this.apod = data)
  }
}
