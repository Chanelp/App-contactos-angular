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

  constructor(private randomUser: RandomUserService) {}

  ngOnInit(): void {
    // Solicitar al servicio el contenido y suscribirse
    this.randomUser.obtenerRandomContact().subscribe((response: Results) => {
      this.contact = response.results[0]; // Se lo pasamos al random contact
    });
  }

  obtenerNuevoContacto() {
    this.randomUser.obtenerRandomContact().subscribe(
      (response: Results) => {
        this.contact = response.results[0]; // Se lo pasamos al random contact
      },
      (error) => console.error(`Error: ${error}`)
    );
  }
}
