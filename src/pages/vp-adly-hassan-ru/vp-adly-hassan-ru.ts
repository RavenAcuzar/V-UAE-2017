import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPssPageRU } from '../vp-sathi-senathirajah-ru/vp-sathi-senathirajah-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-adly-hassan-ru.html'
})
export class VPahPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPssPageRU = VPssPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
