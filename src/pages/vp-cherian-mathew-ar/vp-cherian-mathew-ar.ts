import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPdsPageAR } from '../vp-david-sharma-ar/vp-david-sharma-ar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-cherian-mathew-ar.html'
})
export class VPcmPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPdsPageAR = VPdsPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
