import { Component, OnInit } from '@angular/core';
import { ServicioHttp } from './../../appWS/httpWS';


@Component({
    selector: 'lista-users',
    templateUrl: '/app/appUsuario/listUsurios/templateUsers.html'
})

export class ComponentUsers implements OnInit{
    private lUsuarios : Array<Object>;

    constructor(private ws: ServicioHttp){

    } 

    ngOnInit(){
        this.ws.getUsers().subscribe(
            dato => this.lUsuarios = dato,
            err => console.log(err),
            () => this.tratarCompeticiones()
        );
    }

       tratarCompeticiones() {
        this.lUsuarios.forEach(usuario => {
            if ((<String>usuario['name']).includes(' ')) {
                usuario['name'] = (<String>usuario['name']).split(' ')[0].trim()
            }
        })
    }
}