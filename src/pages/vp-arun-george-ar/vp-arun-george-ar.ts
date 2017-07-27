import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPahPageAR } from '../vp-adly-hassan-ar/vp-adly-hassan-ar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-arun-george-ar.html'
})
export class VPagPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPahPageAR = VPahPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
