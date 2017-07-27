import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPdiPageTR } from '../vp-donna-imson-tr/vp-donna-imson-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-tg-kintanar-tr.html'
})
export class VPtgPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPdiPageTR = VPdiPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
