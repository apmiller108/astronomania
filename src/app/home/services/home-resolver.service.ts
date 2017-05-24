import { Injectable } from '@angular/core';
import { Router,
         Resolve,
         RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { HomeService } from './home.service';

@Injectable()
export class HomeResolver implements Resolve<any> {
  constructor(private service: HomeService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.service.getApod();
  }
}

