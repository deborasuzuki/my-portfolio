import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fileUrl: any;

  constructor(
    private translateService: TranslateService,
    private sanitizer: DomSanitizer
  ) {}

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

  ngOnInit() {
    const data =
      'https://s3.amazonaws.com/front-resources.somos.us/somos-us/privacy-policy/Politica_Privacidade_Somos.pdf';
    const blob = new Blob([data], { type: 'application/pdf' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );

    console.log(this.fileUrl);
  }
}
