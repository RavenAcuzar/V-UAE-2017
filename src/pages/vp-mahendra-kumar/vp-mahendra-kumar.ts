import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPmqPage } from '../vp-dr-motaz-qais/vp-dr-motaz-qais';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-mahendra-kumar.html'
})
export class VPmkPage {
  TheSpeakersPage = TheSpeakersPage;
  VPmqPage = VPmqPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
