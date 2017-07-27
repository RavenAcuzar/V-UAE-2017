import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { allAboutPageFR } from '../allabout-fr/allabout-fr';
import { NewsPageFR } from '../news-fr/news-fr';


@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-fr.html'
})
export class NewslandingPageFR {
allAboutPageFR = allAboutPageFR;
TheSpeakersPageFR = TheSpeakersPageFR;
NewsPageFR = NewsPageFR;
  constructor() {}

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
