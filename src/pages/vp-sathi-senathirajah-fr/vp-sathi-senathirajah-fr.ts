import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPftPageFR } from '../vp-ferdie-tolentino-fr/vp-ferdie-tolentino-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-sathi-senathirajah-fr.html'
})

export class VPssPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPftPageFR = VPftPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
