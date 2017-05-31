import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AsteroidService } from './asteroid.service';

// Interfaces
import { AsteroidsResponse } from '../models/asteroids-response.interface';

@Injectable()
export class AsteroidsResolver implements Resolve<AsteroidsResponse> {
  constructor(private service: AsteroidService) {}

  resolve(): Observable<AsteroidsResponse> {
    return this.service.getAsteroids();
  }
}

