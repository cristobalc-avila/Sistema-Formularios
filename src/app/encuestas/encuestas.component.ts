import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  p: number = 1;

  total: number = 0;
  _listFilter: string="";

  filteredEncuestas: IFormlario[]=[];

  constructor(public formularioService:FormularioService,private cookie:CookieService,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    let id=this.cookie.get('id_usuario');
    this.usuarioService.getUsuario(id).subscribe((res:any) =>{
      this.usuarioService.usuario=res;
      let carrera=this.usuarioService.usuario[0].carrera;
      let sexo=this.usuarioService.usuario[0].sexo;
      this.formularioService.getEncuestas(carrera,sexo,this.cookie.get('id_usuario')).subscribe((res:any[]) =>{
        this.formularioService.encuestas=res;
        this.formularioService.filteredEncuestas=res;
        console.log(this.formularioService.encuestas);
      },
      err => console.log(err))
      this.total = this.formularioService.formularios.length;
    },
    (err: any) => console.log(err))
  }

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.formularioService.filteredEncuestas = 
      this.listFilter? this.performFilter(this.listFilter) : this.formularioService.encuestas;
  }
  
  performFilter(filterBy:string) : IFormlario[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.formularioService.encuestas.filter((enc:IFormlario) => 
    enc.titulo.toLocaleLowerCase().indexOf(filterBy) !== -1 || enc.subtipo_formulario.toLocaleLowerCase().indexOf(filterBy) !== -1);
    //retornar nuevo arreglo filtrado
  }

}
