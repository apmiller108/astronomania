import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AsteroidService } from './asteroid.service';

// Interfaces
import { Asteroid } from '../models/asteroid.interface';

@Injectable()
export class AsteroidResolver implements Resolve<any> {
  constructor(private service: AsteroidService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Asteroid> {
    return this.service.getAsteroid(route.paramMap.get('id'));
  }
}

