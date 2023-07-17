import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth/login',
    loadChildren: () =>
      import('./pages/initial/initial.module').then((m) => m.InitialModule),
  },
  {
    path: 'auth/login/identifier',
    loadChildren: () =>
      import('./pages/log-in/log-in.module').then((m) => m.LogInModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
