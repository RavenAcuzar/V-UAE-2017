import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPmkPageAR } from '../vp-mahendra-kumar-ar/vp-mahendra-kumar-ar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-david-sharma-ar.html'
})
export class VPdsPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPmkPageAR = VPmkPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
