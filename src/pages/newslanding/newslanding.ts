import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { allAboutPage } from '../allabout/allabout';
import { NewsPage } from '../news/news';

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding.html'
})
export class NewslandingPage {
allAboutPage = allAboutPage;
TheSpeakersPage = TheSpeakersPage;
NewsPage = NewsPage;
  constructor() {}

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
