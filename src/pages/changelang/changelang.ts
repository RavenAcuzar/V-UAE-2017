import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashnextPage } from '../splashnext/splashnext';
import { SplashnextPageAR } from '../splashnext-ar/splashnext-ar';
import { SplashnextPageFR } from '../splashnext-fr/splashnext-fr';
import { SplashnextPageRU } from '../splashnext-ru/splashnext-ru';
import { SplashnextPageTR } from '../splashnext-tr/splashnext-tr';


@Component({
  selector: 'page-change',
  templateUrl: 'changelang.html'
})
export class ChangeLangPage {
  SplashnextPage = SplashnextPage;
  SplashnextPageAR = SplashnextPageAR;
  SplashnextPageFR = SplashnextPageFR;
  SplashnextPageRU = SplashnextPageRU;
  SplashnextPageTR = SplashnextPageTR;
  constructor(public navCtrl: NavController) {

  }

}
