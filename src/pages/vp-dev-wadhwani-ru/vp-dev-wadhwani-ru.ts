import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-wadhwani-ru.html'
})
export class VPdwPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
