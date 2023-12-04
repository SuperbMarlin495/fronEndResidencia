import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeViewComponent},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
