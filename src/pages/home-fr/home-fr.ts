import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { allAboutPageFR } from '../allabout-fr/allabout-fr';
import { MarkPageFR } from '../mark-fr/mark-fr';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
import { DownloadsPageFR } from '../downloads-fr/downloads-fr';
import { NewsPageFR } from '../news-fr/news-fr';
import { HomePage } from "../home/home";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home-fr.html',
})
export class HomePageFR extends HomePage {
  @ViewChild(Content) content: Content;

  allAboutPageFR = allAboutPageFR;
  MarkPageFR = MarkPageFR;
  Dubai101PageFR = Dubai101PageFR;
  DownloadsPageFR = DownloadsPageFR;
  NewsPageFR = NewsPageFR;

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController,
  toastCtrl: ToastController, network: Network,protected connectionSvc: ConnectionService) {
    super(navCtrl, http, loadingController,toastCtrl, network, connectionSvc);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
