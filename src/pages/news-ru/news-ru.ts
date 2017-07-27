import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { NewslandingPageRU } from '../newslanding-ru/newslanding-ru';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';


@Component({
  selector: 'page-news',
  templateUrl: 'news-ru.html'
})
export class NewsPageRU {
  NewslandingPageRU = NewslandingPageRU;
  TheSpeakersPageRU = TheSpeakersPageRU;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {}
}
