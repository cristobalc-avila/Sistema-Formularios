import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  p: number = 1;

  total: number = 0;
  _listFilter: string="";

  filteredActividades: IFormlario[]=[];
  
  constructor(public formularioService:FormularioService,private cookie:CookieService,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    let id=this.cookie.get('id_usuario');
    this.usuarioService.getUsuario(id).subscribe((res:any) =>{
      this.usuarioService.usuario=res;
      let carrera=this.usuarioService.usuario[0].carrera;
      let sexo=this.usuarioService.usuario[0].sexo;
      this.formularioService.getActividades(carrera,sexo,this.cookie.get('id_usuario')).subscribe((res:any[]) =>{
        this.formularioService.actividades=res;
        this.formularioService.filteredActividades=res;
        console.log(this.formularioService.actividades);
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
    this.formularioService.filteredActividades = 
      this.listFilter? this.performFilter(this.listFilter) : this.formularioService.actividades;
  }
  
  performFilter(filterBy:string) : IFormlario[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.formularioService.actividades.filter((act:IFormlario) => 
    act.titulo.toLocaleLowerCase().indexOf(filterBy) !== -1 || act.subtipo_formulario.toLocaleLowerCase().indexOf(filterBy) !== -1);
    //retornar nuevo arreglo filtrado
  }
}
