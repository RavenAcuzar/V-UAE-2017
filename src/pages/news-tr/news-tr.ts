import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewslandingPageTR } from '../newslanding-tr/newslanding-tr';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { NewsPage } from "../news/news";
import { Http } from "@angular/http";


@Component({
  selector: 'page-news',
  templateUrl: 'news-tr.html'
})
export class NewsPageTR  extends NewsPage{
  NewslandingPageTR = NewslandingPageTR;
  TheSpeakersPageTR = TheSpeakersPageTR;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
 constructor(protected navCtrl: NavController, protected navParams: NavParams, protected loadingController: LoadingController,
    protected http: Http) {
      super(navCtrl, navParams,loadingController,http);
    }
}
