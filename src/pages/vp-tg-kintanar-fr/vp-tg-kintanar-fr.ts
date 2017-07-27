import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPdiPageFR } from '../vp-donna-imson-fr/vp-donna-imson-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-tg-kintanar-fr.html'
})
export class VPtgPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPdiPageFR = VPdiPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
