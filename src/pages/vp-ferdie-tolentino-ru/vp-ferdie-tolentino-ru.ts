import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPcmPageRU } from '../vp-cherian-mathew-ru/vp-cherian-mathew-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ferdie-tolentino-ru.html'
})
export class VPftPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPcmPageRU = VPcmPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
