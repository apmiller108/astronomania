import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// Interfaces
import { Asteroid } from '../../models/asteroid.interface';

@Component({
  selector: 'app-asteroid-view',
  styleUrls: ['asteroid-view.component.scss'],
  templateUrl: './asteroid-view.component.html'
})

export class AsteroidViewComponent implements OnInit {
  distanceUnits: string[] = ['kilometers', 'meters', 'miles', 'feet'];
  activeDistanceUnit: string = 'kilometers';
  jplUrl: SafeUrl;
  @Input() asteroid: Asteroid;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.jplUrl = this.sanitizer.bypassSecurityTrustUrl(this.asteroid.nasa_jpl_url);
  }

  distanceUnitClasses(unit) {
    return {
      'kilometers': unit === 'kilometers',
      'meters': unit === 'meters',
      'miles': unit === 'miles',
      'feet': unit === 'feet',
    };
  }
}
