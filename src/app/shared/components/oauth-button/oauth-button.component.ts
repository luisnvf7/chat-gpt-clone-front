import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-oauth-button',
  templateUrl: './oauth-button.component.html',
  styleUrls: ['./oauth-button.component.scss']
})
export class OauthButtonComponent {

  @Input('type') oauthType : enumType = undefined

  @Output() onSelectAuth: EventEmitter<enumType> = new EventEmitter();

  public selectedAuth () {
    this.onSelectAuth.emit(this.oauthType)
  }

}

export type enumType = "google" | "microsoft" | "apple" | undefined
