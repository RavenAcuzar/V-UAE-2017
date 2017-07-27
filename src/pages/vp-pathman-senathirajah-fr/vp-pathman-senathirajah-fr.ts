import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPagPageFR } from '../vp-arun-george-fr/vp-arun-george-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-pathman-senathirajah-fr.html'
})
export class VPpsPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPagPageFR = VPagPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
