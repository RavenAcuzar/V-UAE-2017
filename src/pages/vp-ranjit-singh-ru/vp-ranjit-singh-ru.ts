import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VPksPageRU } from '../vp-kuna-senathirajah-ru/vp-kuna-senathirajah-ru';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ranjit-singh-ru.html'
})
export class VPrsPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPksPageRU = VPksPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
