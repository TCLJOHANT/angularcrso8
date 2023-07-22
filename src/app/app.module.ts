import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './canciones/cancion.component';
import { CancionListaComponent } from './cancion-lista/cancion-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    CancionListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
