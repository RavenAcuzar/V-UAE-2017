import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NewslandingPage } from '../newslanding/newslanding';

@IonicPage()
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout.html'
})
export class allAboutPage {
HomePage = HomePage;
NewslandingPage = NewslandingPage;
  constructor() {}
  ionViewDidLoad() {
      console.log('ionViewDidLoad AboutPage');
  }
}
