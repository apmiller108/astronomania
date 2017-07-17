import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AsteroidService } from './asteroid.service';

// Interfaces
import { NeoStats } from '../models/neo-stats.interface';

// @Injectable()
// export class NeoStatsResolver implements Resolve<any> {
//   constructor(private service: AsteroidService) {}

//   resolve(): Observable<NeoStats> {
//     return this.service.getNeoStats();
//   }
// }

