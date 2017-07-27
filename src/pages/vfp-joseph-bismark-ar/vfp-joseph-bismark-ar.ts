import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPtgPageAR } from '../vp-tg-kintanar-ar/vp-tg-kintanar-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vfp-joseph-bismark-ar.html'
})
export class VFPPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPtgPageAR = VPtgPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
