import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPksPageTR } from '../vp-kuna-senathirajah-tr/vp-kuna-senathirajah-tr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ranjit-singh-tr.html'
})
export class VPrsPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPksPageTR = VPksPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
