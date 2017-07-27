import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPdsPage } from '../vp-david-sharma/vp-david-sharma';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-cherian-mathew.html'
})
export class VPcmPage {
  TheSpeakersPage = TheSpeakersPage;
  VPdsPage = VPdsPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
