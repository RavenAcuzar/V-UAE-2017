import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPahPage } from '../vp-adly-hassan/vp-adly-hassan';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-arun-george.html'
})
export class VPagPage {
  TheSpeakersPage = TheSpeakersPage;
  VPahPage = VPahPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
