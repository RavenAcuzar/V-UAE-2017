import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { VPtgPage } from '../vp-tg-kintanar/vp-tg-kintanar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vfp-joseph-bismark.html'
})
export class VFPPage {
  TheSpeakersPage = TheSpeakersPage;
  VPtgPage = VPtgPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor() {}

}
