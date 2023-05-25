import { Injectable, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public display = new Subject<boolean>();


  @ViewChild(SidebarComponent, { static: false })
  sidebarComponent!: SidebarComponent;

  constructor() { }

  showSidebar() {
    this.display.next(true);
  }

  hideSidebar() {
    this.display.next(false);
  }
}
