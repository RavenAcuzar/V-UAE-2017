import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPpsPageAR } from '../vp-pathman-senathirajah-ar/vp-pathman-senathirajah-ar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kuna-senathirajah-ar.html'
})
export class VPksPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPpsPageAR = VPpsPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
