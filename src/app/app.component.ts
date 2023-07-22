import { Component } from '@angular/core';
import {Cancion} from './models/cancion.model';
//interfas de artista
interface Artista{
  nombre:String,
  genero:String,
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
      img:'assets/IMG/ANUEL-AA.jpg'
    },
    {
      nombre:'Bryce savage',
      genero:'hip hop',
      img:'assets/IMG/bryce-savage.jpeg'
    }
  ];
  
  Canciones:Cancion[]=[
    {
      titulo:'Hasta que dios diga',
      imagen:'assets/IMG/canciones/hastaquediosdiga.jpg',
      duracion:200,
      descripcion:'de anuel AA',
    },
    {
      titulo: 'Despacito',
      imagen: 'assets/IMG/hastaquediosdiga.jpg',
      duracion: 230,
      descripcion: 'de Luis Fonsi y Daddy Yankee'
    },
    {
      titulo: 'Gasolina',
      imagen: 'assets/IMG/hastaquediosdiga.jpg',
      duracion: 210,
      descripcion: 'de Daddy Yankee',
    },
  ];


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
