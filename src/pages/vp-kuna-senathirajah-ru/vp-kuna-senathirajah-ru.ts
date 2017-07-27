import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPpsPageRU } from '../vp-pathman-senathirajah-ru/vp-pathman-senathirajah-ru';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kuna-senathirajah-ru.html'
})
export class VPksPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPpsPageRU = VPpsPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
