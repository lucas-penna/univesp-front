import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const authenticatedPagesModule = () => import('./modules/authenticated-pages/authenticated-pages.module').then(m => m.AuthenticatedPagesModule);
const loginModule = () => import('./modules/login/login.module').then(m => m.LoginModule);
const resetPasswordModule = () => import('./modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule);
const createAccountModule = () => import('./modules/create-account/create-account.module').then(m => m.CreateAccountModule);

const routes: Routes = [
  { path: '', loadChildren: authenticatedPagesModule, canActivate: [AuthGuard] },
  { path: 'login', loadChildren: loginModule },
  { path: 'create-account', loadChildren: createAccountModule },
  { path: 'reset-password', loadChildren: resetPasswordModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
