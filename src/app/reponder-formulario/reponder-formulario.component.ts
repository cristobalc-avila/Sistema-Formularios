import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IFormlario, IRespuesta } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { RespuestaService } from '../services/respuesta.service';
@Component({
  selector: 'app-reponder-formulario',
  templateUrl: './reponder-formulario.component.html',
  styleUrls: ['./reponder-formulario.component.css']
})
export class ReponderFormularioComponent implements OnInit {

  constructor(public formularioService:FormularioService, private route: ActivatedRoute,private cookie:CookieService,private respuestaService:RespuestaService) { 
  }
  id: any = "";

  ngOnInit(): void {
    this.formularioService.getFormulario(this.getId()).subscribe((res:any[]) =>{
      this.formularioService.formulario=res;
      console.log(this.formularioService.formulario);
    },
    err => console.log(err))

  }
  getId():string{
    this.id = this.route.snapshot.paramMap.get('id');
    return this.id;
  }

  url=this.formularioService.formularios[0].url;
  
  respoder(){
    const respuesta:IRespuesta={
      id_usuario:this.cookie.get('id_usuario'),
      id_formulario:this.getId()
    }
    console.log(respuesta);
    this.respuestaService.saveRespuesta(respuesta).subscribe(() => {  
    });
  }
}
