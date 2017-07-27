import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPcmPageID } from '../vp-cherian-mathew-id/vp-cherian-mathew-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ferdie-tolentino-id.html'
})
export class VPftPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPcmPageID = VPcmPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
