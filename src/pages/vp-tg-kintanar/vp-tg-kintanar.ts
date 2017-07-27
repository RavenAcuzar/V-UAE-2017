import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPdiPage } from '../vp-donna-imson/vp-donna-imson';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-tg-kintanar.html'
})
export class VPtgPage {
  TheSpeakersPage = TheSpeakersPage;
  VPdiPage = VPdiPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
