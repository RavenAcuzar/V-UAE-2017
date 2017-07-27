import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { VFPPageRU } from '../vfp-joseph-bismark-ru/vfp-joseph-bismark-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vmp-dato-sri-vijay-eswaran-ru.html'
})
export class VMPPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VFPPageRU = VFPPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
