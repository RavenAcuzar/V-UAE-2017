import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { NewslandingPageAR } from '../newslanding-ar/newslanding-ar';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';


@Component({
  selector: 'page-news',
  templateUrl: 'news-ar.html'
})
export class NewsPageAR {
  NewslandingPageAR = NewslandingPageAR;
  TheSpeakersPageAR = TheSpeakersPageAR;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {}

  }
