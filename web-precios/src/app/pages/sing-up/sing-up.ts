import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sing-up.html',
  styleUrl: './sing-up.css'
})
export class SingUp {


  email ='';
  contrasenia='';
  nombre='';
  apellido='';
  edad= 0;
  dni=0;

  formulario = new FormGroup({
    nombre : new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(3),]),
    apellido : new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(3),]),
    edad: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
    dni:new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.minLength(8)]),
    correo : new FormControl('',[Validators.required,Validators.email]),
    contrasenia : new FormControl('',[Validators.required,Validators.minLength(6)]),
    repetirContrasenia : new FormControl('',[Validators.required,Validators.minLength(6),this.validarContrasenias]),
  })

  ngOnInit(){
    this.formulario.valueChanges.subscribe((value)=>{
      console.log(value);
    })

    this.formulario.statusChanges.subscribe((algo) =>{
      console.log(algo);
    })

  }

  // enviarFormulario() {
  //   console.log(this.formulario);
  //   console.log(this.formulario.value);
  // }

  validarContrasenias(control: AbstractControl): ValidationErrors | null {
    const error = { iguales: false };

    if (!control.value) {
      return error;
    }

    const contrasenia = control.parent?.get('contrasenia')?.value;

    if (!contrasenia) {
      return error;
    }

    if (control.value === contrasenia) {
      return null;
    } else {
      return error;
    }
  }



}
