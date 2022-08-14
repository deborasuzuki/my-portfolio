import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  icon: string = 'moon';
  light: boolean = false;

  constructor() {}

  ngOnInit() {}

  public toggleTheme() {
    const theme = document.body.classList.toggle('light-theme');
    this.light = !this.light;

    theme ? (this.icon = 'sun') : (this.icon = 'moon');
  }
}
