import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder,private loginService:LoginService) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
    
  login(){
    this.loginService.login(this.formLogin.value.email,this.formLogin.value.password)
    .subscribe((res:any)=>{
    },err=>console.log(err))
  }

  ngOnInit(): void {
  }

}
