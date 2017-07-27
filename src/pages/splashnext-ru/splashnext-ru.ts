import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { HomePageRU } from '../home-ru/home-ru';

@Component({
  selector: 'page-splashnext',
  templateUrl: 'splashnext-ru.html'
})
export class SplashnextPageRU {
  SplashPage = SplashPage;
  HomePageRU = HomePageRU;
  constructor() {}
}
