import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {

  constructor (private _route: Router) {
  }

  public onClick (type : "login" | "sign-up") {
    if (type === 'login') {
      this._route.navigate(["/auth/login/identifier"])
    } else {

    }

  }

}
