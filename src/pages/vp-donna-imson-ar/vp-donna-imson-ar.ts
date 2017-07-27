import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPrsPageAR } from '../vp-ranjit-singh-ar/vp-ranjit-singh-ar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-donna-imson-ar.html'
})
export class VPdiPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPrsPageAR = VPrsPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
