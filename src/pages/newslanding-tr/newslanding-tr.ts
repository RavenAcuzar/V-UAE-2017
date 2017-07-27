import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';
import { NewsPageTR } from '../news-tr/news-tr';

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-tr.html'
})
export class NewslandingPageTR {
allAboutPageTR = allAboutPageTR;
TheSpeakersPageTR = TheSpeakersPageTR;
NewsPageTR = NewsPageTR;
  constructor() {}

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
