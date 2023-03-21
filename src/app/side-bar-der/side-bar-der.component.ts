import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-side-bar-der',
  templateUrl: './side-bar-der.component.html',
  styleUrls: ['./side-bar-der.component.css']
})
export class SideBarDerComponent implements OnInit {

  constructor(public loginService:LoginService,public usuarioService:UsuarioService,private cookie:CookieService) { }

  ngOnInit(): void {
    let id=this.cookie.get('id_usuario');
    this.usuarioService.getUsuario(id).subscribe((res:any) =>{
      this.usuarioService.usuario=res;
      console.log(res);
    },
      (    err: any) => console.log(err))
  }

}
