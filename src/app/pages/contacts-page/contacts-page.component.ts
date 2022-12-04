import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  filtroSexo: string = 'todos';
  listaContactos: IContact[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    //Obtenemos los Query Params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam: ', params.sexo);

      if (params.sexo) {
        this.filtroSexo = params.sexo;
      }

      //Obtener la lista de contactos
      this.contactService
        .obtenerContactos(this.filtroSexo)
        .then((lista) => (this.listaContactos = lista))
        .catch((error) =>
          console.log(`Ha habido un error al obtener los contactos ${error}`)
        )
        .finally(() => console.info('Petición de contactos terminada.'));
    });
  }

  volverAHome(contacto: IContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto,
      },
    };

    this.router.navigate(['/home'], navigationExtras);
  }
}
