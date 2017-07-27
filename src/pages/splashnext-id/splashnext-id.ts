import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { HomePageID } from '../home-id/home-id';

@Component({
  selector: 'page-splashnext',
  templateUrl: 'splashnext-id.html'
})
export class SplashnextPageID {
  SplashPage = SplashPage;
  HomePageID = HomePageID;
  constructor() {}
}
