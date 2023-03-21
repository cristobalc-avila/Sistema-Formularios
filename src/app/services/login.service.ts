import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUsuario } from '../formulario';
import { map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router,private cookie:CookieService) { }
  public usuarioLogueado:any={};
  saveUser(Usuario:IUsuario){
    return this.http.post<IUsuario[]>('http://34.204.7.108:5000/usuario',Usuario);
  }
  login(email:string,password:string){
    let userLogin={correo:email,clave:password};
    return this.http.post('http://54.209.153.70:5000/login',userLogin).pipe(map((res:any)=>{
      this.cookie.set('token',res.token);
      this.cookie.set('id_usuario',res.usuario[0].id);
      this.cookie.set('correo',res.usuario[0].correo)
      this.cookie.set('nivel',res.usuario[0].rol);
      this.cookie.set('sexo',res.usuario[0].sexo);
      this.cookie.set('carrera',res.usuario[0].carrera);
      if(res.usuario[0].rol==='1'){
        this.router.navigate(['home-admin']);
      }else{
        this.router.navigate(['home']);
      }
      return res;
    }));
  }
  logout(){
    this.cookie.deleteAll();
    this.router.navigate(['']);
  }
  loggedIn():boolean{
    return this.cookie.check('token');
  }
}
