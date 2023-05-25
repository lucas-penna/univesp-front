import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { ContentComponent } from 'src/app/core/content/content.component';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';
import { TopbarComponent } from 'src/app/core/topbar/topbar.component';
import { AuthenticatedPagesRoutingModule } from './authenticated-pages-routing.module';
import { AuthenticatedPagesComponent } from './authenticated-pages.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  declarations: [
    AuthenticatedPagesComponent,
    ContentComponent,
    TopbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AuthenticatedPagesRoutingModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ProgressSpinnerModule,
    PanelMenuModule
  ],
  providers: [
  ]
})
export class AuthenticatedPagesModule { }
