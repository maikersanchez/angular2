"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ServicioHttp = (function () {
    function ServicioHttp(http) {
        this.http = http;
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
        this.apiKey = '';
        this.ruta = '';
        this.header = new http_1.Headers();
        //this.header.append('X-Auth-Token', this.apiKey);
    }
    ServicioHttp.prototype.getUsers = function () {
        this.ruta = 'users';
        return this.http.get(this.baseURL + this.ruta).map(function (res) { return res.json(); });
    };
    ServicioHttp.prototype.sendNewUser = function (pObject) {
        this.ruta = 'posts';
        return this.http.post(this.baseURL + this.ruta, pObject).map(function (res) { return res.json(); });
    };
    ServicioHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ServicioHttp);
    return ServicioHttp;
}());
exports.ServicioHttp = ServicioHttp;
//# sourceMappingURL=httpWS.js.map