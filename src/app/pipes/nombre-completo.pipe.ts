import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IContact, ...args: unknown[]): string {
    return `${contacto.nombre} ${contacto.apellidos}`;
  }

}
