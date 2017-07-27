import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPtgPageID } from '../vp-tg-kintanar-id/vp-tg-kintanar-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vfp-joseph-bismark-id.html'
})
export class VFPPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPtgPageID = VPtgPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
