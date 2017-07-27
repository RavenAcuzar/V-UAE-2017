import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPahPageRU } from '../vp-adly-hassan-ru/vp-adly-hassan-ru';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-arun-george-ru.html'
})
export class VPagPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPahPageRU = VPahPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
