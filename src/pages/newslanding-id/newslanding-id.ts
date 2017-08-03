import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { allAboutPageID } from '../allabout-id/allabout-id';
import { NewsPageID } from '../news-id/news-id';
import { Http } from "@angular/http";
import { NewslandingPage } from "../newslanding/newslanding";

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-id.html'
})
export class NewslandingPageID extends NewslandingPage {
  @ViewChild(Content) content: Content;
  
  allAboutPageID = allAboutPageID;
  TheSpeakersPageID = TheSpeakersPageID;
  NewsPageID = NewsPageID;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController) {
    super(navCtrl, http, loadingController);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
