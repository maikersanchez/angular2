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
var forms_1 = require('@angular/forms');
var ComponenteUsuario = (function () {
    function ComponenteUsuario(fb, ws) {
        this.fb = fb;
        this.ws = ws;
        this.newUserForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.minLength(5)],
            phone: ['', forms_1.Validators.minLength(6)]
        });
    }
    ComponenteUsuario.prototype.doLogin = function () {
        console.log(this.newUserForm.dirty);
        console.log(this.newUserForm.valid);
        console.log(this.newUserForm.value);
    };
    ComponenteUsuario.prototype.sendUser = function () {
        var _this = this;
        this.doLogin();
        if (!this.newUserForm.dirty || !this.newUserForm.valid) {
            alert('el formmulario no tiene el formato necesario');
            return;
        }
        else {
            this.ws.sendNewUser(this.newUserForm.value).subscribe(function (dato) { return _this.resultado = dato; }, function (err) { return console.log(err); }, function () { return console.log(_this.resultado); });
            alert('Registro enviado, correctamente');
        }
    };
    ComponenteUsuario = __decorate([
        core_1.Component({
            selector: 'new-user',
            templateUrl: '/app/appUsuario/newUsuario/appTemplateUsuario.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, httpWS_1.ServicioHttp])
    ], ComponenteUsuario);
    return ComponenteUsuario;
}());
exports.ComponenteUsuario = ComponenteUsuario;
//# sourceMappingURL=appComponentUser.js.map