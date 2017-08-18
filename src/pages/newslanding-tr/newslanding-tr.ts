import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';
import { NewsPageTR } from '../news-tr/news-tr';
import { Http } from "@angular/http";
import { NewslandingPage } from "../newslanding/newslanding";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-tr.html'
})
export class NewslandingPageTR extends NewslandingPage {
  @ViewChild(Content) content: Content;

  allAboutPageTR = allAboutPageTR;
  TheSpeakersPageTR = TheSpeakersPageTR;
  NewsPageTR = NewsPageTR;

  
  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController,
  public toastCtrl:ToastController, network: Network,protected connectionSvc:ConnectionService) {
    super(navCtrl, http, loadingController, toastCtrl, network,connectionSvc);
  }

  navigateToNews(id: String) {
    this.navCtrl.push(NewsPageTR, {
      id: id
    });
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
