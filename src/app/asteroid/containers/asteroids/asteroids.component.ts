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
  <nav class="pagination is-centered">
    <a class="pagination-previous"
       (click)="getPage(currentPage - 1)">
      Previous
    </a>
    <a class="pagination-next"
       (click)="getPage(currentPage + 1)">
      Next
    </a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link"
           [class.is-current]="currentPage === 0"
           (click)="getPage(0)">
          1
        </a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li *ngFor="let pageNumber of pageNumbers">
        <a class="pagination-link"
           [class.is-current]="currentPage === pageNumber && currentPage !== 0 && currentPage !== totalPages"
           [class.is-disabled]="pageNumber === 0 || pageNumber >= totalPages"
           (click)="getPage(pageNumber)">
          {{ pageNumber + 1 }}
        </a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link"
           [class.is-current]="currentPage === totalPages"
           (click)="getPage(totalPages)">
          {{ totalPages + 1 }}
        </a>
      </li>
    </ul>
  </nav>
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
      .subscribe((data) => this.asteroidsResponse = data.asteroidsResponse)

    this.asteroids = this.asteroidsResponse.near_earth_objects;
    this.currentPage = this.asteroidsResponse.page.number;
    this.totalPages = this.asteroidsResponse.page.total_pages;
    this.pageNumbers = this.calculatePageRange(this.currentPage);
  }

  calculatePageRange(currentPage: number): number[] {
    return [currentPage, (currentPage + 1), (currentPage + 2)];
  }

  getPage(page: number): void {
    if (page !== this.currentPage && page >= 0) {
      this.asteroidService.getPage(page)
        .subscribe((data) => {
          this.asteroidsResponse = data
          this.currentPage = data.page.number
          this.totalPages = data.page.total_pages
          this.pageNumbers = this.calculatePageRange(data.page.number)
          this.asteroids = data.near_earth_objects
        });
    }
  }
}
