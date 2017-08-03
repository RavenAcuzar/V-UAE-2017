import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, LoadingController } from 'ionic-angular';
import { allAboutPageID } from '../allabout-id/allabout-id';
import { MarkPageID } from '../mark-id/mark-id';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';
import { DownloadsPageID } from '../downloads-id/downloads-id';
import { HomePage } from "../home/home";
import { Http } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home-id.html',
})
export class HomePageID extends HomePage {
  @ViewChild(Content) content: Content;

  allAboutPageID = allAboutPageID;
  MarkPageID = MarkPageID;
  Dubai101PageID = Dubai101PageID;
  DownloadsPageID = DownloadsPageID;

  constructor(protected navCtrl: NavController, protected http: Http, protected loadingController: LoadingController) {
    super(navCtrl, http, loadingController);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
}
