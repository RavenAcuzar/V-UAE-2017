import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-wadhwani-tr.html'
})
export class VPdwPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
