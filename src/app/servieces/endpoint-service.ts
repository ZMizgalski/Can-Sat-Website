import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  private url: string;
  constructor(private http: HttpClient) {
    // this.url = '/';
    this.url = 'http://localhost:8080/';
  }
}
