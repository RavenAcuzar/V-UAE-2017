import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPhnPageID } from '../vp-hendra-nilam-id/vp-hendra-nilam-id';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kpadma-id.html'
})
export class VPkpPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPhnPageID = VPhnPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
