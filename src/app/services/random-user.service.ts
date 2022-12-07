import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRandomContact } from '../models/randomusers';

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

  obtenerRandomContact(): Observable<any> {
    return this.http.get('https://randomuser.me/api').pipe(
      retry(2), // N° de reintento de peticiones
      catchError(this.handleError) // Sacamos error si algo falla
    );
  }

  obtenerContacts(n: number): void {}
}
