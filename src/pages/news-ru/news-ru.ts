import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { NewslandingPageRU } from '../newslanding-ru/newslanding-ru';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { NewsPage } from "../news/news";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-news',
  templateUrl: 'news-ru.html'
})
export class NewsPageRU  extends NewsPage{
  NewslandingPageRU = NewslandingPageRU;
  TheSpeakersPageRU = TheSpeakersPageRU;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
   constructor(protected navCtrl: NavController, protected navParams: NavParams, protected loadingController: LoadingController,
    protected http: Http, protected toastCtrl: ToastController, protected network: Network,protected connectionSvc: ConnectionService) {
      super(navCtrl, navParams,loadingController,http, toastCtrl,network,connectionSvc);
  }
}
