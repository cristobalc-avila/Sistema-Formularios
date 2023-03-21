import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAddService {
  

  public oculto:string="";
  public aceptado:boolean=false;
  public mensaje:string="";
  constructor() { }

  ocultarModal(){
    this.oculto="";
    console.log('ocultarModal');
  }
  mostrarModal(){
    this.oculto="block";
    console.log('mostrarModal');
  }
  setMensaje(cambio:string){
    this.mensaje=cambio;
  }
  

}
