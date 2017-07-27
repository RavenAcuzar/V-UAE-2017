import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPpsPage } from '../vp-pathman-senathirajah/vp-pathman-senathirajah';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kuna-senathirajah.html'
})
export class VPksPage {
  TheSpeakersPage = TheSpeakersPage;
  VPpsPage = VPpsPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
