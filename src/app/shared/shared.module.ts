import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialButtonComponent } from './components/initial-button/initial-button.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OauthButtonComponent } from './components/oauth-button/oauth-button.component';

@NgModule({
  declarations: [InitialButtonComponent, OauthButtonComponent],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [
    InitialButtonComponent,
    OauthButtonComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule {}
