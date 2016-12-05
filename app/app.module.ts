import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ServicioHttp } from './appWS/httpWS';
import { ModuloUsers } from './appUsuario/listUsurios/appModuleUsers';
import { CommonModule } from '@angular/common';
import { AppComponent }  from './app.component';
import { ModuloUser  } from './appUsuario/newUsuario/appModuleUser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, RouterModule, HttpModule, ModuloUsers, CommonModule, ModuloUser, ReactiveFormsModule, FormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
