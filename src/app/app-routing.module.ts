import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';

const routes: Routes = [
  {path: '', component: WelcomeViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cotizacion', component: CotizacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
