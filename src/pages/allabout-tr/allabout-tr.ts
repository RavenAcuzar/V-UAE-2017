import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePageTR } from '../home-tr/home-tr';
import { NewslandingPageTR } from '../newslanding-tr/newslanding-tr';

@IonicPage()
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout-tr.html'
})
export class allAboutPageTR {
HomePageTR = HomePageTR;
NewslandingPageTR = NewslandingPageTR;
  constructor() {}
  ionViewDidLoad() {
      console.log('ionViewDidLoad AboutPage');
  }
}
