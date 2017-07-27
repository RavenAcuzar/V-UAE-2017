import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPmqPageFR } from '../vp-dr-motaz-qais-fr/vp-dr-motaz-qais-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-mahendra-kumar-fr.html'
})
export class VPmkPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPmqPageFR = VPmqPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
