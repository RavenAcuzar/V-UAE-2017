import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPdsPageFR } from '../vp-david-sharma-fr/vp-david-sharma-fr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-cherian-mathew-fr.html'
})
export class VPcmPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPdsPageFR = VPdsPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
