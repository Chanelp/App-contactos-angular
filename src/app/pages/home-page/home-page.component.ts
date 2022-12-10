import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomusers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  token: string | null = null;
  contactoSeleccionado: IRandomContact | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //Comprobar si el existe el token en el session Storage
    this.token = sessionStorage.getItem('token');

    //Leemos del estado del historial de navegación
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
    }
  }

  navegarAContactos() : void{
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }

    this.router.navigate(['dashboard/contacts'], navigationExtras);
  }
}
