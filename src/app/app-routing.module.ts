import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { ReponderFormularioComponent } from './reponder-formulario/reponder-formulario.component';
import { SideBarDerComponent } from './side-bar-der/side-bar-der.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { MisEncuestasComponent } from './mis-encuestas/mis-encuestas.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { EditarEncuestaComponent } from './editar-encuesta/editar-encuesta.component';
import { LoginComponent } from './login/login.component';
import { FormularioRespondidoComponent } from './formulario-respondido/formulario-respondido.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';


const routes: Routes = [
  //------------------------------------------
  //------------- Routing Interno ------------
  //------------------------------------------
  { path: '', component: LoginComponent },
  //------------------- Home -----------------
  { path: 'home', component: HomeComponent },
  
  //------------------- HomeAdmin -----------------
  { path: 'home-admin', component: HomeAdminComponent },


  //------------------- Encuestas -----------------
  { path: 'encuestas', component: EncuestasComponent },

  //------------------- Actividades -----------------
  { path: 'actividades', component: ActividadesComponent },

  //----------------Responder Encuesta------------
  {path:'respoderEncuesta/:id',component:ReponderFormularioComponent},

  //---------------Editar Encuesta----------------
  {path:'editarEncuesta/:id',component:EditarEncuestaComponent},

  //----------------Crear Encuesta------------
  { path: 'crearEncuesta', component: CrearEncuestaComponent },

  //----------------Crear Actividad------------
  { path: 'crearActividad', component: CrearActividadComponent },

  //{path: '**', component: 404Component} //por implementar

  //----------------Mis Encuestas------------
  {path:'misFormularios',component:MisEncuestasComponent},

  //----------------Formulario Respondido------------
  {path:'formulariosRespondido',component:FormularioRespondidoComponent},

  //------------------------------------------
  //------------- Links Externos -------------
  //------------------------------------------

  //----------------- Intranet ---------------
  {
    path: 'intranet',
    component: SideBarDerComponent,
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl:
        'https://intranet.ubiobio.cl/f1eb7f652eff2e368d40131c48a52a5c/intranet/?',
    },
  },
  //----------------- Moodle -----------------
  {
    path: 'moodle',
    component: SideBarDerComponent,
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl: 'https://moodleubb.ubiobio.cl/login/index.php',
    },
  },
  //----------------- Adecca -----------------
  {
    path: 'adecca',
    component: SideBarDerComponent,
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl: 'https://adecca.ubiobio.cl/session/login',
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      },
    },
  ],
})
export class AppRoutingModule {}
