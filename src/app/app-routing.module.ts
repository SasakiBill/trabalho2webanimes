import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAnimeComponent } from './components/criar-anime/criar-anime.component';
import { EditarAnimeComponent } from './components/editar-anime/editar-anime.component';
import { ListaDeAnimesComponent } from './components/lista-de-animes/lista-de-animes.component';

const routes: Routes = [
  {path:'listaDeAnimes', component: ListaDeAnimesComponent},
  {path:'criarAnime', component: CriarAnimeComponent},
  {path:'editarAnime/:indice', component: EditarAnimeComponent},
  {path:'**', redirectTo:"/listaDeAnimes"},
  {path:'', redirectTo:"/llistaDeAnimes", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
