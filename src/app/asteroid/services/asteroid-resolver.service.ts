import { Injectable } from '@angular/core';
import { Router,
         Resolve,
         RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AsteroidService } from './asteroid.service';

@Injectable()
export class AsteroidResolver implements Resolve<any> {
  constructor(private service: AsteroidService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.service.getAsteroids()
  }
}

