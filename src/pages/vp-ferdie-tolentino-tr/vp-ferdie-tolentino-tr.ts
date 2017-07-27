import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPcmPageTR } from '../vp-cherian-mathew-tr/vp-cherian-mathew-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ferdie-tolentino-tr.html'
})
export class VPftPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPcmPageTR = VPcmPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
