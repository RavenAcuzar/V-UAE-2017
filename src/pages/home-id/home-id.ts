import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { allAboutPageID } from '../allabout-id/allabout-id';
import { MarkPageID } from '../mark-id/mark-id';
import { Dubai101PageID } from '../dubai101-id/dubai101-id';
import { DownloadsPageID } from '../downloads-id/downloads-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home-id.html',
})
export class HomePageID {

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  allAboutPageID = allAboutPageID;
  MarkPageID = MarkPageID;
  Dubai101PageID = Dubai101PageID;
  DownloadsPageID = DownloadsPageID;
  constructor() { }
}
