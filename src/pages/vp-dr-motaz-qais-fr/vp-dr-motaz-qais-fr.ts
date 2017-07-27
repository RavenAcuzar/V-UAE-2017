import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPkpPageFR } from '../vp-kpadma-fr/vp-kpadma-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais-fr.html'
})
export class VPmqPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPkpPageFR = VPkpPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
