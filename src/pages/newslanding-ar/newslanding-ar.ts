import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { allAboutPageAR } from '../allabout-ar/allabout-ar';
import { NewsPageAR } from '../news-ar/news-ar';
import { NewslandingPage } from "../newslanding/newslanding";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-ar.html'
})
export class NewslandingPageAR extends NewslandingPage {
  @ViewChild(Content) content: Content;

  allAboutPageAR = allAboutPageAR;
  TheSpeakersPageAR = TheSpeakersPageAR;
  NewsPageAR = NewsPageAR;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController,
  public toastCtrl:ToastController, network: Network,protected connectionSvc:ConnectionService) {
    super(navCtrl, http, loadingController, toastCtrl, network,connectionSvc);
    
  }
  navigateToNews(id: String) {
    this.navCtrl.push(NewsPageAR, {
      id: id
    });
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
