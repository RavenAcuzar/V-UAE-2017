import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePageFR } from '../home-fr/home-fr';
import { NewslandingPageFR } from '../newslanding-fr/newslanding-fr';

 
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout-fr.html'
})
export class allAboutPageFR {
HomePageFR = HomePageFR;
NewslandingPageFR = NewslandingPageFR;
  constructor() {}
  ionViewDidLoad() {
      console.log('ionViewDidLoad AboutPage');
  }
}
