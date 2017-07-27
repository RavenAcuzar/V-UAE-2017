import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPftPageRU } from '../vp-ferdie-tolentino-ru/vp-ferdie-tolentino-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-sathi-senathirajah-ru.html'
})

export class VPssPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPftPageRU = VPftPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
