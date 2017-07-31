import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashnextPage } from '../splashnext/splashnext';
import { SplashnextPageAR } from '../splashnext-ar/splashnext-ar';
import { SplashnextPageID } from '../splashnext-id/splashnext-id';
import { SplashnextPageFR } from '../splashnext-fr/splashnext-fr';
import { SplashnextPageRU } from '../splashnext-ru/splashnext-ru';
import { SplashnextPageTR } from '../splashnext-tr/splashnext-tr';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {
  SplashnextPage = SplashnextPage;
  SplashnextPageAR = SplashnextPageAR;
  SplashnextPageID = SplashnextPageID;
  SplashnextPageFR = SplashnextPageFR;
  SplashnextPageRU = SplashnextPageRU;
  SplashnextPageTR = SplashnextPageTR;

  constructor() { 
  }

  setLanguage(language) {
    window.localStorage['mylanguage'] = language;
  }
}
