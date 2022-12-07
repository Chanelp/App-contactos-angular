import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomusers';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss'],
})
export class RandomUserComponent implements OnInit {
  randomResults: Results | undefined;
  randomContact: IRandomContact | undefined;

  constructor(private randomUser: RandomUserService) {}

  ngOnInit(): void {
    // Solicitar al servicio el contenido y suscribirse
    this.randomUser.obtenerRandomContact().subscribe((response: Results) => {
      this.randomContact = response.results[0];
      console.table(this.randomContact.name);
    }
    );
  }
}
