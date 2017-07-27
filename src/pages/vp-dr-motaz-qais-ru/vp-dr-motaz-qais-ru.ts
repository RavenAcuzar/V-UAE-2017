import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPkpPageRU } from '../vp-kpadma-ru/vp-kpadma-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais-ru.html'
})
export class VPmqPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPkpPageRU = VPkpPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
