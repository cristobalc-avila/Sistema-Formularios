import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { ModalAddService } from '../services/modal-add.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  formFormulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private modaladdService:ModalAddService,
    private cookie:CookieService
  ) {
    this.formFormulario = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      url: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fecha_vencimiento: ['', [Validators.required]],
      sub_tipo:['',[Validators.required]],
      sexo_dirigido:['',[Validators.required]],
      carrera:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.modaladdService.setMensaje("Actividad Guardada Con Exito!!!");
  }

  abrirModal(){
    this.modaladdService.mostrarModal();
  }

  saveData() {
    this.abrirModal();
    let formulario:any={
      titulo:this.formFormulario.value.titulo,
      descripcion:this.formFormulario.value.descripcion,
      url:this.formFormulario.value.url,
      tipo_formulario:"Actividad",
      subtipo_formulario:this.formFormulario.value.sub_tipo,
      estado:"DISPONIBLE",
      sexo_dirigido:this.formFormulario.value.sexo_dirigido,
      carrera_dirigida:this.formFormulario.value.carrera,
      fecha_vencimiento:this.formFormulario.value.fecha_vencimiento,
      id_usuario:this.cookie.get('id_usuario')
    }
    this.guardarFormulario(formulario);
  }

  guardarFormulario(formulario:IFormlario){
    this.formularioService.saveFormulario(formulario).subscribe(() => {
    });
    this.formFormulario.reset();
  }
  public carreras:Array<string>=[
    "Todas",
    'Diseño Gráfico',
    "Contador Público y Auditor",
    "Ingeniería Civil Informática",
    "Ingeniería Comercial",
    "Pedagogía en Educación Física",
    "Psicología",
    "Enfermería",
    "Fonoaudiología",
    "Ingeniería en Alimentos",
    "Ingeniería en Recursos Naturales",
    "Nutrición y Dietética"
  ]

  public actividades:Array<string>=[
    "Charla",
    'Seminario',
    "Conversatorio",
    "Concurso",
    "Curso",
  ]
}
