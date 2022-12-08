import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRandomContact, Results } from '../models/randomusers';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {

  constructor(private http: HttpClient) {}

  // Manejo de errores
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`Ha ocurrido un error: ${error.error}`);
    } else {
      console.error(
        `Error en el backend ${error.status}. El error es: ${error.error}`
      );
    }

    return throwError(
      () => new Error('Error en la petición de contacto aleatorio')
    );
  }

  obtenerRandomContact(): Observable<Results> {
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // N° de reintento de peticiones
      catchError(this.handleError) // Sacamos error si algo falla
    );
  }

  obtenerRandomContacts(n: number): Observable<Results[]> {
    const params: HttpParams = new HttpParams().set("results", n);

    return this.http.get<Results[]>('https://randomuser.me/api', {params: params} ).pipe(
      retry(2),
      catchError((this.handleError))
    );
  }

  obtenerRandomContactsporGenero(sexo: string): Observable<Results>{
    const params: HttpParams = new HttpParams().set("gender", sexo);

    return this.http.get<Results>('https://randomuser.me/api', {params: params} ).pipe(
      retry(2),
      catchError((this.handleError))
    );
  }

}
