import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomusers';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;
  filtroPrevio: string = 'todos';

  contacto: IRandomContact | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Vamos a leer los parámetros
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });

    if(history.state.data){
      this.contacto = history.state.data;
    }

    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro;
    }
  }
}
