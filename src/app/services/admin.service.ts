import { Injectable } from '@angular/core';
import { IFormlario, IRespuesta } from '../formulario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  public encuesta:any=[];
  public actividad:any=[];
  public respuesta:any=[];
  public enlace:string="54.209.153.70";

  constructor(private http:HttpClient) { }

  getEncuestas():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://'+this.enlace+':5000/encuestas').pipe(map((res:any) => res.data));
  }
  getActividades():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://'+this.enlace+':5000/actividades').pipe(map((res:any) => res.data));
  }
  getRespuestas():Observable<IRespuesta[]>{
    return this.http.get<IFormlario[]>('http://'+this.enlace+':5000/respuestas').pipe(map((res:any) => res.data));
  }
}
