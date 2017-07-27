import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { HomePageAR } from '../home-ar/home-ar';

@Component({
  selector: 'page-splashnext',
  templateUrl: 'splashnext-ar.html'
})
export class SplashnextPageAR {
  SplashPage = SplashPage;
  HomePageAR = HomePageAR;
  constructor() {}
}
