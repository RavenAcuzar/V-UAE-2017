import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPcmPageAR } from '../vp-cherian-mathew-ar/vp-cherian-mathew-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ferdie-tolentino-ar.html'
})
export class VPftPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPcmPageAR = VPcmPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
