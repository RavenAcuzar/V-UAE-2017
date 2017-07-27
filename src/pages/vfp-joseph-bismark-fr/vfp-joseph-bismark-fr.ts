import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPtgPageFR } from '../vp-tg-kintanar-fr/vp-tg-kintanar-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vfp-joseph-bismark-fr.html'
})
export class VFPPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPtgPageFR = VPtgPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
