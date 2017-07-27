import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { allAboutPageFR } from '../allabout-fr/allabout-fr';
import { MarkPageFR } from '../mark-fr/mark-fr';
import { Dubai101PageFR } from '../dubai101-fr/dubai101-fr';
import { DownloadsPageFR } from '../downloads-fr/downloads-fr';
import { NewsPageFR } from '../news-fr/news-fr';


@Component({
  selector: 'page-home',
  templateUrl: 'home-fr.html',
})
export class HomePageFR {

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  allAboutPageFR = allAboutPageFR;
  MarkPageFR = MarkPageFR;
  Dubai101PageFR = Dubai101PageFR;
  DownloadsPageFR = DownloadsPageFR;
  NewsPageFR = NewsPageFR;
  constructor() { }
}
