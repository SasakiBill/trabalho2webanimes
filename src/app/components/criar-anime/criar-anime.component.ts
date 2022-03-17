import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animeService.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-criar-anime',
  templateUrl: './criar-anime.component.html',
  styleUrls: ['./criar-anime.component.scss']
})
export class CriarAnimeComponent implements OnInit {
  public formAnime : FormGroup;

  constructor(private _location: Location, private _router : Router, private animeService : AnimesService, private _formBuilder : FormBuilder) { 
    this.formAnime = this._formBuilder.group({
      name : ["", [Validators.required, Validators.minLength(4)]],
      gender : ["", [Validators.required]], 
      studio : ["", [Validators.required]],
      launch_date : ["", [Validators.required]],
      number_episodes : ["", [Validators.required]],
      streaming_platform : ["", [Validators.required]],
      description : ["", [Validators.required]],
      classification : ["", [Validators.required]]
    })
  }

  ngOnInit(): void {}

  private validarFormulario()
  {
    for(let campos in this.formAnime.controls)
    {
      this.formAnime.controls[campos].markAsTouched();
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formAnime.valid){
      return;
    }
    this.salvar();
  }

  public salvar()
  {
    if (this.animeService.inserirAnime(
      new anime(this.formAnime.controls["name"].value,
      this.formAnime.controls["gender"].value,
      this.formAnime.controls["studio"].value,
      this.formAnime.controls["launch_date"].value,
      this.formAnime.controls["number_episodes"].value,
      this.formAnime.controls["streaming_platform"].value,
      this.formAnime.controls["description"].value,
      this.formAnime.controls["classification"].value))){
        alert("Anime adicionado com sucesso ao repositório!");
        this._router.navigate(["/listaDeAnimes"]);
      } else {
        alert("Erro ao adicionar anime ao repositório!");
      }
  }

  backClicked()
  {
    this._location.back();
  }
}
