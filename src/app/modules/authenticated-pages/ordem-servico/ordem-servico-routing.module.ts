import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarOrdemServicoComponent } from './cadastrar/cadastrar-ordem-servico.component';
import { ConsultarOrdemServicoComponent } from './consultar/consultar-ordem-servico.component';

const routes: Routes = [
  { path: '', component: ConsultarOrdemServicoComponent },
  { path: 'new', component: CadastrarOrdemServicoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemServicoRoutingModule { }
