import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { HomePageFR } from '../home-fr/home-fr';

@Component({
  selector: 'page-splashnext',
  templateUrl: 'splashnext-fr.html'
})
export class SplashnextPageFR {
  SplashPage = SplashPage;
  HomePageFR = HomePageFR;
  constructor() {}
}
