import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animeService.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-anime',
  templateUrl: './editar-anime.component.html',
  styleUrls: ['./editar-anime.component.scss']
})
export class EditarAnimeComponent implements OnInit {
  public formEditar : FormGroup;
  private indice : number = -1;

  constructor(private _location: Location, private _router : Router, private _actRouter : ActivatedRoute,
    private _animesService : AnimesService, private _formBuilder : FormBuilder) {
      this.formEditar = this._formBuilder.group({
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

  ngOnInit(): void {
    this._actRouter.params.subscribe((parametros)=>{
      if(parametros["indice"]){
        this.indice = parametros["indice"];
        let anime = this._animesService.getAnime(this.indice);
        
        this.formEditar = this._formBuilder.group({
          name : [anime.getName(), [Validators.required, Validators.minLength(4)]],
          gender : [anime.getGender(), [Validators.required]], 
          studio : [anime.getStudio(), [Validators.required]],
          launch_date : [anime.getLaunchDate(), [Validators.required]],
          number_episodes : [anime.getNumberEpisodes(), [Validators.required]],
          streaming_platform : [anime.getStreamingPlatform(), [Validators.required]],
          description : [anime.getDescription(), [Validators.required]],
          classification : [anime.getClassification(), [Validators.required]]
        })
      }
    })
  }

  private validarFormulario()
  {
    for (let campos in this.formEditar.controls)
    {
      this.formEditar.controls[campos].markAsTouched();
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formEditar.valid){
      return;
    }
    this.salvar();
  }

  public salvar()
  {
    let animee = new anime(this.formEditar.controls["name"].value,
      this.formEditar.controls["gender"].value,
      this.formEditar.controls["studio"].value,
      this.formEditar.controls["launch_date"].value,
      this.formEditar.controls["number_episodes"].value,
      this.formEditar.controls["streaming_platform"].value,
      this.formEditar.controls["description"].value,
      this.formEditar.controls["classification"].value);
      if (this._animesService.editarAnime(this.indice, animee)){
        alert("Anime atualizado com sucesso");
        this._router.navigate(["/listaDeAnimes"])
      } else {
        alert("Erro ao atualizar anime");
      }
  }

  backClicked()
  {
    this._location.back();
  }

}
