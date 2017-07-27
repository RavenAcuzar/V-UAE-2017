import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPdsPageRU } from '../vp-david-sharma-ru/vp-david-sharma-ru';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-cherian-mathew-ru.html'
})
export class VPcmPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPdsPageRU = VPdsPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
