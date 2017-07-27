import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPdjPageID } from '../vp-dev-johl-id/vp-dev-johl-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-hendra-nilam-id.html'
})
export class VPhnPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPdjPageID = VPdjPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
