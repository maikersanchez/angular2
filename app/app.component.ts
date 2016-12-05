import { Component } from '@angular/core';

@Component({
  selector: 'appPrincipal',
  template: `<nav class="navbar navbar-dark bg-primary bg-faded">
  <a class="navbar-brand" href="#"><strong>Granada.io</strong></a>
  <ul class="nav navbar-nav">
    <li class="nav-item active">
      <a  routerLink="/lista-users">lista usuarios</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" routerLink="/new-user">Nuevo usuario</a>
   </li>
  </ul>
</nav>
<router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
