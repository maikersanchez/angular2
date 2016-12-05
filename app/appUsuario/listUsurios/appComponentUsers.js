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
var httpWS_1 = require('./../../appWS/httpWS');
var ComponentUsers = (function () {
    function ComponentUsers(ws) {
        this.ws = ws;
    }
    ComponentUsers.prototype.ngOnInit = function () {
        var _this = this;
        this.ws.getUsers().subscribe(function (dato) { return _this.lUsuarios = dato; }, function (err) { return console.log(err); }, function () { return _this.tratarCompeticiones(); });
    };
    ComponentUsers.prototype.tratarCompeticiones = function () {
        this.lUsuarios.forEach(function (usuario) {
            if (usuario['name'].includes(' ')) {
                usuario['name'] = usuario['name'].split(' ')[0].trim();
            }
        });
    };
    ComponentUsers = __decorate([
        core_1.Component({
            selector: 'lista-users',
            templateUrl: '/app/appUsuario/listUsurios/templateUsers.html'
        }), 
        __metadata('design:paramtypes', [httpWS_1.ServicioHttp])
    ], ComponentUsers);
    return ComponentUsers;
}());
exports.ComponentUsers = ComponentUsers;
//# sourceMappingURL=appComponentUsers.js.map