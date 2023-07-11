import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialButtonComponent } from './shared/components/initial-button/initial-button.component';
import { SharedModule } from './shared/shared.module';
// import { InitialComponent } from './pages/initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    // InitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }