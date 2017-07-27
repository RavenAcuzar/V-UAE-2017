import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPkpPageAR } from '../vp-kpadma-ar/vp-kpadma-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais-ar.html'
})
export class VPmqPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPkpPageAR = VPkpPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
