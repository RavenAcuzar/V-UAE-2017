import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';
import { NewsPageTR } from '../news-tr/news-tr';
import { Http } from "@angular/http";
import { NewslandingPage } from "../newslanding/newslanding";

 
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-tr.html'
})
export class NewslandingPageTR extends NewslandingPage {
  @ViewChild(Content) content: Content;

  allAboutPageTR = allAboutPageTR;
  TheSpeakersPageTR = TheSpeakersPageTR;
  NewsPageTR = NewsPageTR;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController) {
    super(navCtrl, http, loadingController);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
