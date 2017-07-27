import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPksPageAR } from '../vp-kuna-senathirajah-ar/vp-kuna-senathirajah-ar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ranjit-singh-ar.html'
})
export class VPrsPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPksPageAR = VPksPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
