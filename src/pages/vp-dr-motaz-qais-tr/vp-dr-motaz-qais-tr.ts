import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPkpPageTR } from '../vp-kpadma-tr/vp-kpadma-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais-tr.html'
})
export class VPmqPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPkpPageTR = VPkpPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
