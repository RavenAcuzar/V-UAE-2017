import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { allAboutPageAR } from '../allabout-ar/allabout-ar';
import { NewsPageAR } from '../news-ar/news-ar';
import { NewslandingPage } from "../newslanding/newslanding";
import { Http } from "@angular/http";

 
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-ar.html'
})
export class NewslandingPageAR extends NewslandingPage {
  @ViewChild(Content) content: Content;

  allAboutPageAR = allAboutPageAR;
  TheSpeakersPageAR = TheSpeakersPageAR;
  NewsPageAR = NewsPageAR;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController) {
    super(navCtrl, http, loadingController);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
