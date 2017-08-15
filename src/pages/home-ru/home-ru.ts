import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { allAboutPageRU } from '../allabout-ru/allabout-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';
import { NewsPageRU } from '../news-ru/news-ru';
import { HomePage } from "../home/home";
import { Http } from "@angular/http";
import { Network } from "@ionic-native/network";

@Component({
  selector: 'page-home',
  templateUrl: 'home-ru.html',
})
export class HomePageRU extends HomePage {
  @ViewChild(Content) content: Content;

  allAboutPageRU = allAboutPageRU;
  MarkPageRU = MarkPageRU;
  Dubai101PageRU = Dubai101PageRU;
  DownloadsPageRU = DownloadsPageRU;
  NewsPageRU = NewsPageRU;

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController,
  toastCtrl: ToastController, network: Network) {
    super(navCtrl, http, loadingController,toastCtrl, network);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
