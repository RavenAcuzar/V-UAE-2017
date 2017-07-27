import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { NewslandingPageTR } from '../newslanding-tr/newslanding-tr';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';


@Component({
  selector: 'page-news',
  templateUrl: 'news-tr.html'
})
export class NewsPageTR {
  NewslandingPageTR = NewslandingPageTR;
  TheSpeakersPageTR = TheSpeakersPageTR;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {}
}
