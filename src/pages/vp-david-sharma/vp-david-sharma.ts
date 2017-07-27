import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPmkPage } from '../vp-mahendra-kumar/vp-mahendra-kumar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-david-sharma.html'
})
export class VPdsPage {
  TheSpeakersPage = TheSpeakersPage;
  VPmkPage = VPmkPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
