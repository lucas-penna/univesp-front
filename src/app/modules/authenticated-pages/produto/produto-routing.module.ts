import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarProdutoComponent } from './consultar/consultar-produto.component';

const routes: Routes = [
  { path: '', component: ConsultarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
