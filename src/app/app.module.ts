import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { SideBarIzqComponent } from './side-bar-izq/side-bar-izq.component';
import { SideBarDerComponent } from './side-bar-der/side-bar-der.component';
import { HttpClientModule } from '@angular/common/http';
import { ReponderFormularioComponent } from './reponder-formulario/reponder-formulario.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalAddComponent } from './services/modal-add/modal-add.component';
import { MisEncuestasComponent } from './mis-encuestas/mis-encuestas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { EditarEncuestaComponent } from './editar-encuesta/editar-encuesta.component';
import { SafePipe } from './pipe/safePipe';
import { LoginComponent } from './login/login.component';
import {CookieService} from 'ngx-cookie-service';
import { SidebarIzqAdminComponent } from './sidebar-izq-admin/sidebar-izq-admin.component';
import { FormularioRespondidoComponent } from './formulario-respondido/formulario-respondido.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearEncuestaComponent,
    SideBarIzqComponent,
    SideBarDerComponent,
    ReponderFormularioComponent,
    CrearActividadComponent,
    ModalAddComponent,
    MisEncuestasComponent,
    EncuestasComponent,
    ActividadesComponent,
    EditarEncuestaComponent,
    SafePipe,
    LoginComponent,
    SidebarIzqAdminComponent,
    FormularioRespondidoComponent,
    HomeAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
