import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPssPageAR } from '../vp-sathi-senathirajah-ar/vp-sathi-senathirajah-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-adly-hassan-ar.html'
})
export class VPahPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPssPageAR = VPssPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
