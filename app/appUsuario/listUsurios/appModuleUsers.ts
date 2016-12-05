import { NgModule } from '@angular/core';
import { ServicioHttp } from './../../appWS/httpWS';
import { ComponentUsers  } from './appComponentUsers';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule,
         RouterModule.forRoot([{ path: 'lista-users', component: ComponentUsers}])
    ],
    exports: [ComponentUsers],
    declarations: [
        ComponentUsers
    ],
    providers: [ServicioHttp],
})
export class ModuloUsers { }