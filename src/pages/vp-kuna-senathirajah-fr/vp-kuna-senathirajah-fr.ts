import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPpsPageFR } from '../vp-pathman-senathirajah-fr/vp-pathman-senathirajah-fr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kuna-senathirajah-fr.html'
})
export class VPksPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPpsPageFR = VPpsPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
