import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { AsteroidsResponse } from '../../models/asteroids-response.interface';
import { Asteroid } from '../../models/asteroid.interface';

// Services
import { AsteroidService } from '../../services/asteroid.service';

@Component({
  selector: 'app-asteroids',
  styleUrls: ['asteroids.component.scss'],
  template: `
<div class="page-content">
  <h1 class="title">Asteroids</h1>
  <app-paginator
    [currentPage]="currentPage"
    [totalPages]="totalPages"
    [pageNumbers]="pageNumbers"
    (page)="getPage($event)">
    </app-paginator>
  <div class="list-container">
    <app-asteroid-detail
      *ngFor="let asteroid of asteroids"
      [detail]="asteroid">
    </app-asteroid-detail>
  </div>
  {{ asteroidsResponse | json }}
</div>
`
})

export class AsteroidsComponent implements OnInit {
  asteroidsResponse: AsteroidsResponse;
  asteroids: Asteroid[];
  pageNumbers: number[];
  currentPage: number;
  totalPages: number;
  constructor(private activatedRoute: ActivatedRoute,
              private asteroidService: AsteroidService) {}

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((data) => {
        this.asteroidsResponse = data.asteroidsResponse;
        this.asteroids = this.asteroidsResponse.near_earth_objects;
        this.currentPage = this.asteroidsResponse.page.number;
        this.totalPages = this.asteroidsResponse.page.total_pages;
        this.pageNumbers = this.calculatePageRange(this.currentPage);
      });
  }

  getPage(page: number): void {
    if (page !== this.currentPage && page >= 0) {
      this.asteroidService.getPage(page)
        .subscribe((data) => {
          this.asteroidsResponse = data;
          this.asteroids = data.near_earth_objects;
          this.currentPage = data.page.number;
          this.totalPages = data.page.total_pages;
          this.pageNumbers = this.calculatePageRange(data.page.number);
        });
    }
  }

  calculatePageRange(currentPage: number): number[] {
    return [currentPage, (currentPage + 1), (currentPage + 2)];
  }
}
