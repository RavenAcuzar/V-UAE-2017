import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers-ar/thespeakers-ar';
import { VPftPageAR } from '../vp-ferdie-tolentino-ar/vp-ferdie-tolentino-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-sathi-senathirajah-ar.html'
})

export class VPssPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPftPageAR = VPftPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
