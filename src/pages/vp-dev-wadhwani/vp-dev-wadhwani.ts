import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-wadhwani.html'
})
export class VPdwPage {
  TheSpeakersPage = TheSpeakersPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
