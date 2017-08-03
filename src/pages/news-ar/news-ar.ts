import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewslandingPageAR } from '../newslanding-ar/newslanding-ar';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { NewsPage } from "../news/news";
import { Http } from "@angular/http";


@Component({
  selector: 'page-news',
  templateUrl: 'news-ar.html'
})
export class NewsPageAR extends NewsPage{
  NewslandingPageAR = NewslandingPageAR;
  TheSpeakersPageAR = TheSpeakersPageAR;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(protected navCtrl: NavController, protected navParams: NavParams, protected loadingController: LoadingController,
    protected http: Http) {
      super(navCtrl, navParams,loadingController,http);
    }

  }
