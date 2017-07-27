import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPcmPageFR } from '../vp-cherian-mathew-fr/vp-cherian-mathew-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ferdie-tolentino-fr.html'
})
export class VPftPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPcmPageFR = VPcmPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
