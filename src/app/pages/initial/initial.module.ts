import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { InitialComponent } from './initial.component';


@NgModule({
  declarations: [InitialComponent],
  imports: [
    CommonModule,
    InitialRoutingModule
  ]
})
export class InitialModule { }
