import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers-fr/thespeakers-fr';
import { VPrsPageFR } from '../vp-ranjit-singh-fr/vp-ranjit-singh-fr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-donna-imson-fr.html'
})
export class VPdiPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPrsPageFR = VPrsPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
