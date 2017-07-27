import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPftPage } from '../vp-ferdie-tolentino/vp-ferdie-tolentino';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-sathi-senathirajah.html'
})

export class VPssPage {
  TheSpeakersPage = TheSpeakersPage;
  VPftPage = VPftPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
