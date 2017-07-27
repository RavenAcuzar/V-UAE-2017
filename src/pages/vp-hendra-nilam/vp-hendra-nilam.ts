import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPdjPage } from '../vp-dev-johl/vp-dev-johl';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-hendra-nilam.html'
})
export class VPhnPage {
  TheSpeakersPage = TheSpeakersPage;
  VPdjPage = VPdjPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
