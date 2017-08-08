import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, Events } from 'ionic-angular';
import { SplashnextPage } from '../splashnext/splashnext';
import { SplashnextPageAR } from '../splashnext-ar/splashnext-ar';
import { SplashnextPageFR } from '../splashnext-fr/splashnext-fr';
import { SplashnextPageRU } from '../splashnext-ru/splashnext-ru';
import { SplashnextPageTR } from '../splashnext-tr/splashnext-tr';
import { LanguageService } from "../../app/services/language.service";

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {
  SplashnextPage = SplashnextPage;
  SplashnextPageAR = SplashnextPageAR;
  SplashnextPageFR = SplashnextPageFR;
  SplashnextPageRU = SplashnextPageRU;
  SplashnextPageTR = SplashnextPageTR;

  constructor(private events: Events) { 
  }

  setLanguage(language) {
    window.localStorage['mylanguage'] = language;
    LanguageService.publishLanguageChange(this.events);
  }
}
