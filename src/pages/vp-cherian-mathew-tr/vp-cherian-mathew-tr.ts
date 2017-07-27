import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPdsPageTR } from '../vp-david-sharma-tr/vp-david-sharma-tr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-cherian-mathew-tr.html'
})
export class VPcmPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPdsPageTR = VPdsPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
