import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { VPssPageID } from '../vp-sathi-senathirajah-id/vp-sathi-senathirajah-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-adly-hassan-id.html'
})
export class VPahPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPssPageID = VPssPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
