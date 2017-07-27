import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPdjPageFR } from '../vp-dev-johl-fr/vp-dev-johl-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-hendra-nilam-fr.html'
})
export class VPhnPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPdjPageFR = VPdjPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
