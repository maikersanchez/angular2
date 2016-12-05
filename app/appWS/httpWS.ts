import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicioHttp {
    baseURL: string = 'https://jsonplaceholder.typicode.com/';
    apiKey: string = '';
    ruta: string = '';
    header: Headers;

    constructor(private http: Http) {
        this.header = new Headers();
        //this.header.append('X-Auth-Token', this.apiKey);
    }

    getUsers() {
        this.ruta = 'users';
        return this.http.get(this.baseURL + this.ruta).map(res => res.json())
    }

    sendNewUser(pObject: JSON){
        this.ruta ='posts';
        return this.http.post(this.baseURL + this.ruta, pObject).map(res => res.json())
    }

}