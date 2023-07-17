import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialButtonComponent } from './components/initial-button/initial-button.component';
import { AuthInputComponent } from './components/auth-input/auth-input.component';

@NgModule({
  declarations: [InitialButtonComponent, AuthInputComponent],
  imports: [
    CommonModule
  ],
  exports: [InitialButtonComponent, AuthInputComponent]
})
export class SharedModule { }
