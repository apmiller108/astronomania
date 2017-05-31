import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Interfaces
import { AsteroidsResponse } from '../../models/asteroids-response.interface';
import { Asteroid } from '../../models/asteroid.interface';
import { NeoStats } from '../../models/neo-stats.interface';

// Services
import { AsteroidService } from '../../services/asteroid.service';

@Component({
  selector: 'app-asteroids',
  styleUrls: ['asteroids.component.scss'],
  template: `
<div class="page-content">
  <div class="box">
  <h1 class="title">Asteroids (Near Earth Objects)</h1>
  <app-neo-stats
    [neoStats]="neoStats">
  </app-neo-stats>
  <app-paginator
    [currentPage]="currentPage"
    [totalPages]="totalPages"
    [pageNumbers]="pageNumbers"
    (page)="getPage($event)">
    </app-paginator>
  <div class="list-container">
    <app-asteroid-detail
      *ngFor="let asteroid of asteroids; let i = index;"
      [detail]="asteroid"
      [index]="i"
      (view)="viewAsteroid($event)">
    </app-asteroid-detail>
  </div>
  <app-paginator
    [currentPage]="currentPage"
    [totalPages]="totalPages"
    [pageNumbers]="pageNumbers"
    (page)="getPage($event)">
  </app-paginator>
  </div>
</div>
`
})

export class AsteroidsComponent implements OnInit {
  asteroidsResponse: AsteroidsResponse;
  asteroids: Asteroid[];
  currentPage: number;
  pageNumbers: number[];
  totalPages: number;
  neoStats: NeoStats;
  constructor(private activatedRoute: ActivatedRoute,
              private asteroidService: AsteroidService,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data) => {
        this.asteroidsResponse = data.asteroidsResponse;
        this.asteroids = data.asteroidsResponse.near_earth_objects;
        this.currentPage = data.asteroidsResponse.page.number;
        this.totalPages = data.asteroidsResponse.page.total_pages;
        this.pageNumbers = this.calculatePageRange(this.currentPage);
        this.neoStats = data.neoStats;
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

  viewAsteroid(asteroid_id) {
    this.router.navigate(['asteroids', asteroid_id]);
  }
}
