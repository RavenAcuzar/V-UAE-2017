import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPdwPageFR } from '../vp-dev-wadhwani-fr/vp-dev-wadhwani-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-johl-fr.html'
})
export class VPdjPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPdwPageFR = VPdwPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
