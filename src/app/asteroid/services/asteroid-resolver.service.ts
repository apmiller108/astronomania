import { Injectable } from '@angular/core';
import { Router,
         Resolve,
         RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AsteroidService } from './asteroid.service';

// Interfaces
import { AsteroidsResponse } from '../models/asteroids-response.interface';

@Injectable()
export class AsteroidResolver implements Resolve<AsteroidsResponse> {
  constructor(private service: AsteroidService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<AsteroidsResponse> {
    return this.service.getAsteroids()
  }
}

