import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePageID } from '../home-id/home-id';
import { NewslandingPageID } from '../newslanding-id/newslanding-id';

@IonicPage()
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout-id.html'
})
export class allAboutPageID {
HomePageID = HomePageID;
NewslandingPageID = NewslandingPageID;
  constructor() {}
  ionViewDidLoad() {
      console.log('ionViewDidLoad AboutPage');
  }
}
