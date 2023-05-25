import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ButtonModule,
    DividerModule
  ]
})
export class HomeModule { }
