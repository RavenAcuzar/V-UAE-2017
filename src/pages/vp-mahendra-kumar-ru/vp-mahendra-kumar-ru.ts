import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPmqPageRU } from '../vp-dr-motaz-qais-ru/vp-dr-motaz-qais-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-mahendra-kumar-ru.html'
})
export class VPmkPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPmqPageRU = VPmqPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
