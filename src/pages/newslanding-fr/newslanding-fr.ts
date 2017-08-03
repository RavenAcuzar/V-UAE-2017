import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { allAboutPageFR } from '../allabout-fr/allabout-fr';
import { NewsPageFR } from '../news-fr/news-fr';
import { NewslandingPage } from "../newslanding/newslanding";
import { Http } from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-fr.html'
})
export class NewslandingPageFR extends NewslandingPage {
  @ViewChild(Content) content: Content;

  allAboutPageFR = allAboutPageFR;
  TheSpeakersPageFR = TheSpeakersPageFR;
  NewsPageFR = NewsPageFR;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController) {
    super(navCtrl, http, loadingController);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
