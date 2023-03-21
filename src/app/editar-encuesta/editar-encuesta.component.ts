import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { ModalAddService } from '../services/modal-add.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar-encuesta',
  templateUrl: './editar-encuesta.component.html',
  styleUrls: ['./editar-encuesta.component.css']
})
export class EditarEncuestaComponent implements OnInit {

  formFormulario: FormGroup;
  id: any = "";
  constructor(
    private formBuilder: FormBuilder,
    public formularioService: FormularioService,
    private modaladdService:ModalAddService,
    private route: ActivatedRoute
  ) 
  {
    this.formFormulario = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      url: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechavencimiento: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.modaladdService.setMensaje("Se Edito el Formulario con exito!!")
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

  abrirModal(){
    this.modaladdService.mostrarModal();
  }
  EditarData() {
    this.abrirModal();
    let formulario:any={
      descripcion:this.formFormulario.value.descripcion,
      url:this.formFormulario.value.url,
      tipo:this.formFormulario.value.tipo,
      titulo:this.formFormulario.value.titulo,
      fechavencimiento:this.formFormulario.value.fechavencimiento,
      estado:"DISPONIBLE"
    }
    this.EditarFormulario(formulario);
  }

  EditarFormulario(formulario:any){
    this.formularioService.editarFormulario(this.id,formulario).subscribe(() => {
      
    });
    this.formFormulario.reset();
  }
}
