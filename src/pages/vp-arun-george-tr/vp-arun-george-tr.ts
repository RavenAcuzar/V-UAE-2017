import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPahPageTR } from '../vp-adly-hassan-tr/vp-adly-hassan-tr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-arun-george-tr.html'
})
export class VPagPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPahPageTR = VPahPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
