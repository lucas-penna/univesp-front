import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  display: boolean = false;

  items!: MenuItem[];

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.display.subscribe({ next: (d: boolean) => this.display = d })
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        command: ((event?: any) => this.sidebarService.hideSidebar())
      },
      {
        label: 'Clientes',
        icon: 'pi pi-users',
        routerLink: '/clientes',
        command: ((event?: any) => this.sidebarService.hideSidebar())
      },
      
      {
        label: 'Produtos',
        icon: 'pi pi-box',
        routerLink: '/produtos',
        command: ((event?: any) => this.sidebarService.hideSidebar())
      },
      
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //     { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      //   ]
      // },
      // {
      //   label: 'Help',
      //   icon: 'pi pi-fw pi-question',
      //   items: [
      //     {
      //       label: 'Contents',
      //       icon: 'pi pi-pi pi-bars'
      //     },
      //     {
      //       label: 'Search',
      //       icon: 'pi pi-pi pi-search',
      //       items: [
      //         {
      //           label: 'Text',
      //           items: [
      //             {
      //               label: 'Workspace'
      //             }
      //           ]
      //         },
      //         {
      //           label: 'User',
      //           icon: 'pi pi-fw pi-file',
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label: 'Actions',
      //   icon: 'pi pi-fw pi-cog',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         { label: 'Save', icon: 'pi pi-fw pi-save' },
      //         { label: 'Update', icon: 'pi pi-fw pi-save' },
      //       ]
      //     },
      //     {
      //       label: 'Other',
      //       icon: 'pi pi-fw pi-tags',
      //       items: [
      //         { label: 'Delete', icon: 'pi pi-fw pi-minus' }
      //       ]
      //     }
      //   ]
      // }
    ];
  }

}
