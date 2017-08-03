import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewslandingPageFR } from '../newslanding-fr/newslanding-fr';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { NewsPage } from "../news/news";
import { Http } from "@angular/http";


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
    protected http: Http) {
      super(navCtrl, navParams,loadingController,http);
    }
}
