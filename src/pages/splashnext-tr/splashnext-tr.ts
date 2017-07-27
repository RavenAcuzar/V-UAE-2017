import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { HomePageTR } from '../home-tr/home-tr';

@Component({
  selector: 'page-splashnext',
  templateUrl: 'splashnext-tr.html'
})
export class SplashnextPageTR {
  SplashPage = SplashPage;
  HomePageTR = HomePageTR;
  constructor() {}
}
