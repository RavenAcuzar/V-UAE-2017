import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPdwPageID } from '../vp-dev-wadhwani-id/vp-dev-wadhwani-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-johl-id.html'
})
export class VPdjPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPdwPageID = VPdwPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
