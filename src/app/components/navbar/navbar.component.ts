import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  light: boolean = false;
  faMoon = faMoon;
  faSun = faSun;
  icon: any = faMoon;

  constructor(library: FaIconLibrary) {
    library.addIcons(faMoon, faSun);
  }

  ngOnInit() {}

  public toggleTheme() {
    const theme = document.body.classList.toggle('light-theme');
    this.light = !this.light;

    theme ? (this.icon = faSun) : (this.icon = faMoon);
  }
}
