import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { NewslandingPageFR } from '../newslanding-fr/newslanding-fr';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { NewsPage } from "../news/news";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-news',
  templateUrl: 'news-fr.html'
})
export class NewsPageFR extends NewsPage{
  NewslandingPageFR = NewslandingPageFR;
  TheSpeakersPageFR = TheSpeakersPageFR;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
   constructor(protected navCtrl: NavController, protected navParams: NavParams, protected loadingController: LoadingController,
    protected http: Http, protected toastCtrl: ToastController, protected network: Network,protected connectionSvc: ConnectionService) {
      super(navCtrl, navParams,loadingController,http, toastCtrl,network,connectionSvc);
  }
}
