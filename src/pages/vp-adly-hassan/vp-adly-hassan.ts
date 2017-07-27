import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPssPage } from '../vp-sathi-senathirajah/vp-sathi-senathirajah';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-adly-hassan.html'
})
export class VPahPage {
  TheSpeakersPage = TheSpeakersPage;
  VPssPage = VPssPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
