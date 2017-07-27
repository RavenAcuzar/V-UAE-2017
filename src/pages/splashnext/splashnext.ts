import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-splashnext',
  templateUrl: 'splashnext.html'
})
export class SplashnextPage {
  SplashPage = SplashPage;
  HomePage = HomePage;
  constructor() {}

}
