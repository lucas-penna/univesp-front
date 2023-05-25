import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AuthenticatedPagesComponent } from './authenticated-pages.component';
import { ClienteModule } from './cliente/cliente.module';
import { HomeModule } from './home/home.module';
import { OrdemServicoModule } from './ordem-servico/ordem-servico.module';
import { ProdutoModule } from './produto/produto.module';

const routes: Routes = [
  {
    path: '', component: AuthenticatedPagesComponent, children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => HomeModule) },
      { path: 'produtos', loadChildren: () => import('./produto/produto.module').then(m => ProdutoModule) },
      { path: 'clientes', loadChildren: () => import('./cliente/cliente.module').then(m => ClienteModule) },
      { path: 'ordens-servico', loadChildren: () => import('./ordem-servico/ordem-servico.module').then(m => OrdemServicoModule) }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedPagesRoutingModule { }
