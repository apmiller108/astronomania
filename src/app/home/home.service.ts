import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_URL } from '../../environments/environment';
import { API_KEY } from '../../environments/environment';
import { Apod } from './models/apod.interface';

@Injectable()
export class HomeService {
  constructor(private http: Http) {}

  getApod(): Observable<Apod> {
    return this.http
      .get(`${API_URL}/planetary/apod?api_key=${API_KEY}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()))
  }
}
