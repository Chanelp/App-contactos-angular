import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomusers';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss'],
})

export class RandomContactPageComponent implements OnInit {
  // Desde la página tendremos el resultado contacto, lo vamos a almacenar-inicializar con el ngOnInit,
  //y se lo vamos a pasar a nuestro componente a través del input desde nuestro html

  contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    // Solicitar al servicio el contenido y suscribirse
    this.randomUserService
      .obtenerRandomContact()
      .subscribe((response: Results) => {
        this.contact = response.results[0]; // Se lo pasamos al random contact
      });
  }

  obtenerNuevoContacto() {
    this.randomUserService.obtenerRandomContact().subscribe({
      next: (response: Results) => (this.contact = response.results[0]),
      error: (error) => console.error(`Error: ${error}`),
      complete: () => console.info('Petición de random contact terminada'),
    });
  }

  obtenerListaContactos(n: number) {
    this.randomUserService.obtenerRandomContacts(n).subscribe({
      next: (response: Results) => console.log(response),
      error: (error) => console.error(`Error: ${error}`),
      complete: () => console.info('Petición de random contacts terminada'),
    });
  }
}
