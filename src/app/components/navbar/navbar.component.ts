import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  light: boolean = false;

  themeIcon: string = 'dark_mode';
  menuIcon: string = 'menu';

  aba: string = 'home';

  constructor() {}

  public toggleTheme() {
    const theme = document.body.classList.toggle('light-theme');
    this.light = !this.light;

    theme ? (this.themeIcon = 'light_mode') : (this.themeIcon = 'dark_mode');
  }

  public showMenu() {
    const showMenu = document
      .getElementById('mobile-menu')
      ?.classList.toggle('active');

    showMenu ? (this.menuIcon = 'close') : (this.menuIcon = 'menu');
  }
}
