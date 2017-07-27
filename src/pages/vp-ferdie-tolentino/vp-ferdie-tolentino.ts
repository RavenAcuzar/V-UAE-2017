import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPcmPage } from '../vp-cherian-mathew/vp-cherian-mathew';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ferdie-tolentino.html'
})
export class VPftPage {
  TheSpeakersPage = TheSpeakersPage;
  VPcmPage = VPcmPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
