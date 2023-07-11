import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { InitialComponent } from './initial.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [InitialComponent],
  imports: [
    CommonModule,
    InitialRoutingModule,
    SharedModule
  ]
})
export class InitialModule { }
