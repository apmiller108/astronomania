import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((data) => this.apod = data.apod);
  }
}
