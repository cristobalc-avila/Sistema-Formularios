import { Injectable } from '@angular/core';
import { IFormlario } from '../formulario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEstado } from '../formulario';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {

 
  public formularios:IFormlario[]=[];
  public filteredForms: IFormlario[] =[];

  public formulario:any=[];
  public enlace:string="54.209.153.70";

  public encuestas:IFormlario[]=[];
  public filteredEncuestas:IFormlario[]=[];

  public actividades:IFormlario[]=[];
  public filteredActividades:IFormlario[]=[];
  
  public misFormularios:IFormlario[]=[];

  constructor(private http:HttpClient) { }
  
  getFormularios(carrera:string,sexo:string,id_usuario:string):Observable<IFormlario[]>{
    const parametros={carrera:carrera,sexo:sexo,id_usuario:id_usuario};
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/formularios',parametros).pipe(map((res:any) => res.data));
  }
  getEncuestas(carrera:string,sexo:string,id_usuario:string):Observable<IFormlario[]>{
    const parametros={carrera:carrera,sexo:sexo,id_usuario:id_usuario};
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/encuestas',parametros).pipe(map((res:any) => res.data));
  }
  getActividades(carrera:string,sexo:string,id_usuario:string):Observable<IFormlario[]>{
    const parametros={carrera:carrera,sexo:sexo,id_usuario:id_usuario};
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/actividades',parametros).pipe(map((res:any) => res.data));
  }
  getMisFormularios(id:string):Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://'+this.enlace+':5000/misFormularios/'+id).pipe(map((res:any) => res.data));
  }
  getFormulariosRespondidos(carrera:string,sexo:string,id_usuario:string):Observable<IFormlario[]>{
    const parametros={carrera:carrera,sexo:sexo,id_usuario:id_usuario};
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/misFormulariosContestados',parametros).pipe(map((res:any) => res.data));
  }
  saveFormulario(formulario:IFormlario){
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/ingresarformulario',formulario);
  }

  cambiarEstadoFormulario(cambioEstado:IEstado){
    return this.http.put<IEstado>('http://'+this.enlace+':5000/formulario',cambioEstado);
  }
  
  getFormulario(id:string):Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://'+this.enlace+':5000/formulario/'+id).pipe(map((res:any) => res.data));
  }
  editarFormulario(id:string,formulario:any){
    return this.http.put<IFormlario>('http://'+this.enlace+':5000/actualizarFormulario/'+id,formulario);
  }
}
