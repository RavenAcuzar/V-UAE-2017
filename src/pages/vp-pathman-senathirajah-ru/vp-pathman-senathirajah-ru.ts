import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPagPageRU } from '../vp-arun-george-ru/vp-arun-george-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-pathman-senathirajah-ru.html'
})
export class VPpsPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPagPageRU = VPagPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
