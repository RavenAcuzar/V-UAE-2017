import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPdjPageTR } from '../vp-dev-johl-tr/vp-dev-johl-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-hendra-nilam-tr.html'
})
export class VPhnPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPdjPageTR = VPdjPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
