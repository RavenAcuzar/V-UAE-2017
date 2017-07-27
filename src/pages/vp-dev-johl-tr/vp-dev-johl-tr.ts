import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPdwPageTR } from '../vp-dev-wadhwani-tr/vp-dev-wadhwani-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-johl-tr.html'
})
export class VPdjPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPdwPageTR = VPdwPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
