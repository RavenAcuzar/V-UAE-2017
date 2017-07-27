import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPmkPageRU } from '../vp-mahendra-kumar-ru/vp-mahendra-kumar-ru';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-david-sharma-ru.html'
})
export class VPdsPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPmkPageRU = VPmkPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
