import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPhnPageFR } from '../vp-hendra-nilam-fr/vp-hendra-nilam-fr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kpadma-fr.html'
})
export class VPkpPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPhnPageFR = VPhnPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
