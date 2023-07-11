import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initial-button',
  templateUrl: './initial-button.component.html',
  styleUrls: ['./initial-button.component.scss']
})
export class InitialButtonComponent {
//10A37F

  @Input('title') public title: string = ""
}