import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { DownloadsPageTR } from '../downloads-tr/downloads-tr';
import { NewsPageTR } from '../news-tr/news-tr';
import { HomePage } from "../home/home";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";
import { ConnectionService } from "../../app/services/connection.service";


@Component({
  selector: 'page-home',
  templateUrl: 'home-tr.html',
})
export class HomePageTR extends HomePage {
  @ViewChild(Content) content: Content;

  allAboutPageTR = allAboutPageTR;
  MarkPageTR = MarkPageTR;
  Dubai101PageTR = Dubai101PageTR;
  DownloadsPageTR = DownloadsPageTR;
  NewsPageTR = NewsPageTR;

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController,
  toastCtrl: ToastController, network: Network,protected connectionSvc: ConnectionService) {
    super(navCtrl, http, loadingController,toastCtrl, network, connectionSvc);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
