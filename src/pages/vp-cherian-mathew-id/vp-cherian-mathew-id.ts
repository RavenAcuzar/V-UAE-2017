import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPdsPageID } from '../vp-david-sharma-id/vp-david-sharma-id';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-cherian-mathew-id.html'
})
export class VPcmPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPdsPageID = VPdsPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
