import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private URL_HOST = environment.urlBack;

  constructor(private http: HttpClient) {
  }

  getAccountsXUser(idUser: number): Observable<any> {
    return this.http.get(this.URL_HOST + 'getUserAccounts/'+idUser);
  }

    getAccoutDetails(idAccount: string): Observable<any> {
    return this.http.get(this.URL_HOST + 'getAccDetail/'+idAccount);
  }
}
