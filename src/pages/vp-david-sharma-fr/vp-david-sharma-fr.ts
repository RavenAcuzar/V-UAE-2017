import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPmkPageFR } from '../vp-mahendra-kumar-fr/vp-mahendra-kumar-fr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-david-sharma-fr.html'
})
export class VPdsPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPmkPageFR = VPmkPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
