import {Component, OnInit} from '@angular/core';
import { ServicioHttp } from './../../appWS/httpWS';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'new-user',
    templateUrl: '/app/appUsuario/newUsuario/appTemplateUsuario.html'
})

export class ComponenteUsuario {
    newUserForm: any;
    resultado: Array<Object>;
  
    
    constructor(public fb: FormBuilder, private ws: ServicioHttp) {
     this.newUserForm  = this.fb.group({
    name: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', Validators.minLength(5)],
    phone: ['', Validators.minLength(6)]
    })
    }
  

    doLogin() {
        console.log(this.newUserForm.dirty);
        console.log(this.newUserForm.valid);
        console.log(this.newUserForm.value);
    }

    sendUser(){
        this.doLogin();
        if (!this.newUserForm.dirty || !this.newUserForm.valid) {
      alert('el formmulario no tiene el formato necesario');
      return;
    }
    else{
        this.ws.sendNewUser(this.newUserForm.value).subscribe(
            dato => this.resultado = dato,
            err => console.log(err),
            () => console.log(this.resultado)
    );
        
        alert('Registro enviado, correctamente');

    }       
        }
}
