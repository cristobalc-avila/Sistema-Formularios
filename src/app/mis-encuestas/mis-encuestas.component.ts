import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { IEstado } from '../formulario';
import { CookieService } from 'ngx-cookie-service';
import { IFormlario } from '../formulario';
@Component({
  selector: 'app-mis-encuestas',
  templateUrl: './mis-encuestas.component.html',
  styleUrls: ['./mis-encuestas.component.css']
})
export class MisEncuestasComponent implements OnInit {
  p: number = 1;
  total: number = 0;
  _listFilter: string="";
  constructor(public formularioService:FormularioService,private cookie:CookieService) { }

  ngOnInit(): void {
    let id=this.cookie.get('id_usuario');
    console.log(id);
    this.formularioService.getMisFormularios(id).subscribe((res:any[]) =>{
      this.formularioService.misFormularios=res;
      console.log(this.formularioService.misFormularios);
    },
    err => console.log(err))
  }

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.formularioService.filteredForms =
      this.listFilter? this.performFilter(this.listFilter) : this.formularioService.formularios;
  }

  performFilter(filterBy:string) : IFormlario[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.formularioService.formularios.filter((form:IFormlario) =>
    form.titulo.toLocaleLowerCase().indexOf(filterBy) !== -1 || form.subtipo_formulario.toLocaleLowerCase().indexOf(filterBy) !== -1);
    //retornar nuevo arreglo filtrado
  }

  finalizarEncuesta(Id:number){
    let salida:IEstado={
      id:Id,
      estado:"FINALIZADO"
    };
    this.formularioService.cambiarEstadoFormulario(salida).subscribe(() => {
    });

  }
}
