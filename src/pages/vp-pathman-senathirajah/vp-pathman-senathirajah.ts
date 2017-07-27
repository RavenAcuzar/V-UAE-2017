import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPagPage } from '../vp-arun-george/vp-arun-george';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-pathman-senathirajah.html'
})
export class VPpsPage {
  TheSpeakersPage = TheSpeakersPage;
  VPagPage = VPagPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
