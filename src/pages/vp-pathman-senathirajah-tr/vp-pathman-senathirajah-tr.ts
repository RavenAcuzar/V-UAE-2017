import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPagPageTR } from '../vp-arun-george-tr/vp-arun-george-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-pathman-senathirajah-tr.html'
})
export class VPpsPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPagPageTR = VPagPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
