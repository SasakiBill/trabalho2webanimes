import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriarAnimeComponent } from './components/criar-anime/criar-anime.component';
import { EditarAnimeComponent } from './components/editar-anime/editar-anime.component';
import { ListaDeAnimesComponent } from './components/lista-de-animes/lista-de-animes.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarAnimeComponent,
    EditarAnimeComponent,
    ListaDeAnimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
