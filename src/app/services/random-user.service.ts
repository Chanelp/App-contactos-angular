import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRandomContact } from '../models/randomusers';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  obtenerRandomContact(): Observable<any> {
    return this.http.get('https://randomuser.me/api');
  }

  obtenerContacts(n: number): void {

  }

}
