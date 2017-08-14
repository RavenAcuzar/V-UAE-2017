import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { allAboutPageRU } from '../allabout-ru/allabout-ru';
import { NewsPageRU } from '../news-ru/news-ru';
import { NewslandingPage } from "../newslanding/newslanding";
import { Http } from "@angular/http";

 
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-ru.html'
})
export class NewslandingPageRU extends NewslandingPage {
  @ViewChild(Content) content: Content;

  allAboutPageRU = allAboutPageRU;
  TheSpeakersPageRU = TheSpeakersPageRU;
  NewsPageRU = NewsPageRU;
  
  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController) {
    super(navCtrl, http, loadingController);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
