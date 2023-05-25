import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isDarkMode: boolean = true

  constructor(
    private authenticationService: AuthenticationService,
    private themeService: ThemeService,
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.initTheme();
  }

  initTheme() {
    const theme = window.localStorage.getItem('theme');
    this.isDarkMode = this.themeService.theme.href.includes('vela-blue');
    if (theme) {
      this.changeTheme(theme);
    }
  }

  logout() {
    this.authenticationService.logout();
  }

  openSidebar() {
    this.sidebarService.showSidebar();
  }

  changeTheme(theme: string) {
    window.localStorage.setItem('theme', theme);
    this.isDarkMode = theme == 'vela-blue';
    this.themeService.switchTheme(theme);
  }

}
