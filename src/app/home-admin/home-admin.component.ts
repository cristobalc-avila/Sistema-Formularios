import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../services/admin.service';
import { FormularioService } from '../services/formulario.service';
import { RespuestaService } from '../services/respuesta.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(public adminService:AdminService,private respuestaServices:RespuestaService,private cookie:CookieService,private usuarioService:UsuarioService) { }
  

  ngOnInit(): void {
      this.adminService.getActividades().subscribe((res:any[]) =>{
        this.adminService.actividad=res;
        this.adminService.getEncuestas().subscribe((res:any[]) =>{
          this.adminService.encuesta=res;
          this.adminService.getRespuestas().subscribe((res:any[]) =>{
            this.adminService.respuesta=res;
          },
          err => console.log(err))
        },
        err => console.log(err))
      },
      err => console.log(err))
  }
 

  
}
