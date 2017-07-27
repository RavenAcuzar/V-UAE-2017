import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPkpPageID } from '../vp-kpadma-id/vp-kpadma-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais-id.html'
})
export class VPmqPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPkpPageID = VPkpPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
