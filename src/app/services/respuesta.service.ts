import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRespuesta } from '../formulario';
@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http:HttpClient) { }

  public enlace:string="54.209.153.70";

  saveRespuesta(respuesta:IRespuesta){
    return this.http.post<IRespuesta>('http://'+this.enlace+':5000/respuesta',respuesta);
  }
}
