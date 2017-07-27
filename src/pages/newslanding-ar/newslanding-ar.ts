import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { allAboutPageAR } from '../allabout-ar/allabout-ar';
import { NewsPageAR } from '../news-ar/news-ar';

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-ar.html'
})
export class NewslandingPageAR {
allAboutPageAR = allAboutPageAR;
TheSpeakersPageAR = TheSpeakersPageAR;
NewsPageAR = NewsPageAR;
  constructor() {}

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
