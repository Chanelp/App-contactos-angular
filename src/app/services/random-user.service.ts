import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
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
      // Si algo sale mal cuando estamos susbcritos, recibiríamos el error
      catchError(this.handleError)
    );
  }

  obtenerContacts(n: number): void {}
}
