import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';
import { MarkPageTR } from '../mark-tr/mark-tr';
import { Dubai101PageTR } from '../dubai101-tr/dubai101-tr';
import { DownloadsPageTR } from '../downloads-tr/downloads-tr';
import { NewsPageTR } from '../news-tr/news-tr';


@Component({
  selector: 'page-home',
  templateUrl: 'home-tr.html',
})
export class HomePageTR {

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  allAboutPageTR = allAboutPageTR;
  MarkPageTR = MarkPageTR;
  Dubai101PageTR = Dubai101PageTR;
  DownloadsPageTR = DownloadsPageTR;
  NewsPageTR = NewsPageTR;
  constructor() { }
}
