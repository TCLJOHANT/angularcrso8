import { Component, Input } from '@angular/core';
import {Cancion} from './../models/cancion.model'
@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.scss'],
})
export class CancionComponent {
    //  @Input() cancion:Cancion;
    // recibirá un objeto de tipo "Cancion" desde el componente padre (app.component). 
    @Input() cancion: Cancion = {
       titulo: '',
       imagen: '',
       duracion: 0,
       descripcion: '',
   }
}