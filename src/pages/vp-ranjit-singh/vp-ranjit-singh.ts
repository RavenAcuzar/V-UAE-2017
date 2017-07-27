import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPksPage } from '../vp-kuna-senathirajah/vp-kuna-senathirajah';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ranjit-singh.html'
})
export class VPrsPage {
  TheSpeakersPage = TheSpeakersPage;
  VPksPage = VPksPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
