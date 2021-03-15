import { LoginInterceptor } from './interceptors/login-interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoggedUiComponent } from './components/logged-ui/logged-ui.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'logged-ui',
    component: LoggedUiComponent,
    canActivate: [LoginInterceptor],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
