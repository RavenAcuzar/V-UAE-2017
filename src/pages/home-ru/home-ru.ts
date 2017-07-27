import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { allAboutPageRU } from '../allabout-ru/allabout-ru';
import { MarkPageRU } from '../mark-ru/mark-ru';
import { Dubai101PageRU } from '../dubai101-ru/dubai101-ru';
import { DownloadsPageRU } from '../downloads-ru/downloads-ru';
import { NewsPageRU } from '../news-ru/news-ru';


@Component({
  selector: 'page-home',
  templateUrl: 'home-ru.html',
})
export class HomePageRU {

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  allAboutPageRU = allAboutPageRU;
  MarkPageRU = MarkPageRU;
  Dubai101PageRU = Dubai101PageRU;
  DownloadsPageRU = DownloadsPageRU;
  NewsPageRU = NewsPageRU;
  constructor() { }
}
