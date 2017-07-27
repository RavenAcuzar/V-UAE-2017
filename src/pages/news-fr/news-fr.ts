import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { NewslandingPageFR } from '../newslanding-fr/newslanding-fr';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';


@Component({
  selector: 'page-news',
  templateUrl: 'news-fr.html'
})
export class NewsPageFR {
  NewslandingPageFR = NewslandingPageFR;
  TheSpeakersPageFR = TheSpeakersPageFR;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {}

}
