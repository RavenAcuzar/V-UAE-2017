import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPhnPageRU } from '../vp-hendra-nilam-ru/vp-hendra-nilam-ru';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kpadma-ru.html'
})
export class VPkpPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPhnPageRU = VPhnPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
