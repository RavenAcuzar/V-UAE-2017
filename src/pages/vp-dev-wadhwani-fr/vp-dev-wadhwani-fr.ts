import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-wadhwani-fr.html'
})
export class VPdwPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
