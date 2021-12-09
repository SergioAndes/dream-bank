import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL_HOST = environment.urlBack;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get(this.URL_HOST + 'getProducts');
  }
}
