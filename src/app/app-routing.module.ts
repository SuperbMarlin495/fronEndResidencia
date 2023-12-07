import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { MaterialComponent } from './material/material.component';
import { ProductListComponent } from './material/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: WelcomeViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cotizacion', component: CotizacionComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'productList', component: ProductListComponent},
  {path: 'material/edit/:id', component: MaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
