import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-wadhwani-ar.html'
})
export class VPdwPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
