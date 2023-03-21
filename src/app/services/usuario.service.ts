import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../formulario';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public enlace:string="54.209.153.70";
  constructor(private http:HttpClient) { }
  public usuario:any={};
  getUsuario(id:string):Observable<IUsuario>{
    return this.http.get<IUsuario>('http://'+this.enlace+':5000/usuario/'+id).pipe(map((res:any) => res.data));
  }
}
