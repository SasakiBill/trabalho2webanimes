import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animeService.service';

@Component({
  selector: 'app-lista-de-animes',
  templateUrl: './lista-de-animes.component.html',
  styleUrls: ['./lista-de-animes.component.scss']
})
export class ListaDeAnimesComponent implements OnInit {
  public lista_animes : anime[] = [];

  constructor(private _router : Router, private animeService : AnimesService) { }

  ngOnInit(): void {
    this.lista_animes = this.animeService.getAnimes();
  }

  public excluir(indice : number)
  {
    let resultado = confirm("Realmente deseja excluir o anime de seu repositório" + this.animeService.getAnime(indice).getName() + "?");

    if(resultado){
      if(this.animeService.excluirAnime(indice)){
        alert("Anime removido da lista com sucesso!");
      } else {
        alert("Anime não foi removido, portanto continua em sua lista");
      }
    }
  }

  public editar(indice : number) : void
  {
    this._router.navigate(["/editarAnime", indice]);
  }

  public irParaCriarAnime()
  {
    this._router.navigate(["/criarAnime"]);
  }

}
