import { Component } from '@angular/core';
//interfas de artista
interface Artista{
  nombre:String,
  genero:String,
  edad:number
  img:String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeros pasos en angular';
  listaArtistas = ['Mike Towers,Anuel AA', 'Bryan Mayer','Bad bunny'];
  nuevoArtista = '';
  Artistas:Artista [] =[
    {
      nombre:'Anuel AA',
      genero:'REGUETON',
      edad:30,
      img:'assets/IMG/ANUEL-AA.jpg'
    },
    {
      nombre:'Bryce savage',
      genero:'hip hop',
      edad:25,
      img:'assets/IMG/bryce-savage.jpeg'
    }
  ]

  cambiarTitle(){
    this.title = 'new titulo';
  }
  agregarArtista(){
    this.listaArtistas.push(this.nuevoArtista);
    this.nuevoArtista = '';
  }
  arrayArtistaVacio(){
    this.listaArtistas = [];
  }
  deleteItem(index: number ){
    this.listaArtistas.splice(index,1)
  }
  updateItem(index: number ) {
    this.listaArtistas[index] = 'se cambio';
  }
}
