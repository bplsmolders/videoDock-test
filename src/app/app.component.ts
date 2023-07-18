import {Component} from '@angular/core';

@Component({
  selector: 'vd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ended up not using translations
  // constructor(private translate:TranslateService) {
  //   translate.setDefaultLang('en');
  //   translate.use('en')
  // }
}
