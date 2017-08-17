import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { allAboutPageAR } from '../allabout-ar/allabout-ar';
import { MarkPageAR } from '../mark-ar/mark-ar';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { DownloadsPageAR } from '../downloads-ar/downloads-ar';
import { NewsPageAR } from '../news-ar/news-ar';
import { HomePage } from "../home/home";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home-ar.html',
})
export class HomePageAR extends HomePage {
  @ViewChild(Content) content: Content;

  allAboutPageAR = allAboutPageAR;
  MarkPageAR = MarkPageAR;
  Dubai101PageAR = Dubai101PageAR;
  DownloadsPageAR = DownloadsPageAR;
  NewsPageAR = NewsPageAR;

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController,
  toastCtrl: ToastController, network: Network,protected connectionSvc: ConnectionService) {
    super(navCtrl, http, loadingController,toastCtrl, network, connectionSvc);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
