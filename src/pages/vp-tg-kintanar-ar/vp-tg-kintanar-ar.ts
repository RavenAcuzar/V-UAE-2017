import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPdiPageAR } from '../vp-donna-imson-ar/vp-donna-imson-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-tg-kintanar-ar.html'
})
export class VPtgPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPdiPageAR = VPdiPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
