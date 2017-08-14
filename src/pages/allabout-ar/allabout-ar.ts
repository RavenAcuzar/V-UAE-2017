import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePageAR } from '../home-ar/home-ar';
import { NewslandingPageAR } from '../newslanding-ar/newslanding-ar';

 
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout-ar.html'
})
export class allAboutPageAR {
HomePageAR = HomePageAR;
NewslandingPageAR = NewslandingPageAR;
  constructor() {}
  ionViewDidLoad() {
      console.log('ionViewDidLoad AboutPage');
  }
}
