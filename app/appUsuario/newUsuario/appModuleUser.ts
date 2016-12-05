import { NgModule } from '@angular/core';
import { ServicioHttp } from './../../appWS/httpWS';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponenteUsuario } from './appComponentUser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
     imports: [ReactiveFormsModule, RouterModule.forRoot([{ path: 'new-user', component: ComponenteUsuario}]), CommonModule],
     exports: [ComponenteUsuario],
     declarations: [
        ComponenteUsuario 
    ],
    providers: [ServicioHttp]
})

export class ModuloUser { }
