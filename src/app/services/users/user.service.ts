import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL_HOST = environment.urlBack;

  constructor(private http: HttpClient) { }

  loginUser(form: any ): Observable<any> {
    return this.http.post(this.URL_HOST + 'login', form);
  }

}
