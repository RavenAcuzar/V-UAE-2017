import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPmqPageAR } from '../vp-dr-motaz-qais-ar/vp-dr-motaz-qais-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-mahendra-kumar-ar.html'
})
export class VPmkPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPmqPageAR = VPmqPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
