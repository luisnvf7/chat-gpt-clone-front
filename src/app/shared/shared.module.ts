import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialButtonComponent } from './components/initial-button/initial-button.component';

@NgModule({
  declarations: [InitialButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [InitialButtonComponent]
})
export class SharedModule { }
