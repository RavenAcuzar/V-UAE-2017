import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPahPageFR } from '../vp-adly-hassan-fr/vp-adly-hassan-fr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-arun-george-fr.html'
})
export class VPagPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPahPageFR = VPahPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
