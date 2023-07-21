import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'primeros pasos en angular';
  listaArtistas = ['Mike Towers,Anuel AA', 'Bryan Mayer','Bad bunny'];
  nuevoArtista = '';

  cambiarTitle(){
    this.title = 'new titulo';
  }
  agregarArtista(){
    this.listaArtistas.push(this.nuevoArtista);
    this.nuevoArtista = '';
  }
}
