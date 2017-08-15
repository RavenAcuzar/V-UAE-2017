import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { allAboutPageFR } from '../allabout-fr/allabout-fr';
import { NewsPageFR } from '../news-fr/news-fr';
import { NewslandingPage } from "../newslanding/newslanding";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";

 
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-fr.html'
})
export class NewslandingPageFR extends NewslandingPage {
  @ViewChild(Content) content: Content;

  allAboutPageFR = allAboutPageFR;
  TheSpeakersPageFR = TheSpeakersPageFR;
  NewsPageFR = NewsPageFR;

  
  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController,
  public toastCtrl:ToastController, network: Network) {
    super(navCtrl, http, loadingController, toastCtrl, network);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
