import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { allAboutPageRU } from '../allabout-ru/allabout-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';
import { NewsPageRU } from '../news-ru/news-ru';
import { HomePage } from "../home/home";
import { Http } from "@angular/http";

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

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController) {
    super(navCtrl, http, loadingController);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
