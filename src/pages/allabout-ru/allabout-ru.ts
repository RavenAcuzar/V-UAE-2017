import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePageRU } from '../home-ru/home-ru';
import { NewslandingPageRU } from '../newslanding-ru/newslanding-ru';

@IonicPage()
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout-ru.html'
})
export class allAboutPageRU {
HomePageRU = HomePageRU;
NewslandingPageRU = NewslandingPageRU;
  constructor() {}
}
