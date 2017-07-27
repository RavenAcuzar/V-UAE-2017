import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPhnPage } from '../vp-hendra-nilam/vp-hendra-nilam';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kpadma.html'
})
export class VPkpPage {
  TheSpeakersPage = TheSpeakersPage;
  VPhnPage = VPhnPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
