import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './cadastrar/cadastrar-cliente.component';
import { ConsultarClienteComponent } from './consultar/consultar-cliente.component';

const routes: Routes = [
  { path: '', component: ConsultarClienteComponent },
  { path: 'new', component: CadastrarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
