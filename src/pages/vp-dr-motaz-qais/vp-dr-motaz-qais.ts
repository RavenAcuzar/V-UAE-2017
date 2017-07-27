import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPkpPage } from '../vp-kpadma/vp-kpadma';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais.html'
})
export class VPmqPage {
  TheSpeakersPage = TheSpeakersPage;
  VPkpPage = VPkpPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
