import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { VPftPageTR } from '../vp-ferdie-tolentino-tr/vp-ferdie-tolentino-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-sathi-senathirajah-tr.html'
})

export class VPssPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPftPageTR = VPftPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
