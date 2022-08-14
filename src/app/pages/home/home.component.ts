import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private translateService: TranslateService) {}

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }
}
