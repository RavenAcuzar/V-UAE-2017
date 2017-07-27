import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPdwPage } from '../vp-dev-wadhwani/vp-dev-wadhwani';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-johl.html'
})
export class VPdjPage {
  TheSpeakersPage = TheSpeakersPage;
  VPdwPage = VPdwPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
