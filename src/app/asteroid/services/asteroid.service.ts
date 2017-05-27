import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_URL } from '../../../environments/environment';
import { API_KEY } from '../../../environments/environment';

import { AsteroidsResponse } from '../models/asteroids-response.interface';

const apiUrl = `${API_URL}/neo/rest/v1`;

@Injectable()
export class AsteroidService {
  constructor(private http: Http) {}

  getAsteroids(): Observable<AsteroidsResponse> {
    return this.http
      .get(`${apiUrl}/neo/browse?api_key=${API_KEY}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
        }

  getPage(page): Observable<AsteroidsResponse> {
    return this.http
      .get(`${apiUrl}/neo/browse?page=${page}&size=20&api_key=${API_KEY}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
        }

  getAsteroid(asteroid_id) {
    return this.http
      .get(`${apiUrl}/neo/${asteroid_id}?api_key=${API_KEY}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json));
  }
}
