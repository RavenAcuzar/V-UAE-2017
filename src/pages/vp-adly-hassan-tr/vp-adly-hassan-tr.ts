import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPssPageTR } from '../vp-sathi-senathirajah-tr/vp-sathi-senathirajah-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-adly-hassan-tr.html'
})
export class VPahPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPssPageTR = VPssPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
