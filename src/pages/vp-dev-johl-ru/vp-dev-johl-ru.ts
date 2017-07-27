import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPdwPageRU } from '../vp-dev-wadhwani-ru/vp-dev-wadhwani-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-johl-ru.html'
})
export class VPdjPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPdwPageRU = VPdwPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
