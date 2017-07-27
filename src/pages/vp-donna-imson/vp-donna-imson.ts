import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPrsPage } from '../vp-ranjit-singh/vp-ranjit-singh';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-donna-imson.html'
})
export class VPdiPage {
  TheSpeakersPage = TheSpeakersPage;
  VPrsPage = VPrsPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
